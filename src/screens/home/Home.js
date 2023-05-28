import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {countryList} from '../../assets/data/countryList';
import CurrencyInput from '../../components/CurrencyInput';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {selectedCurrency} from '../../redux/actions/selectedCurrencyAction';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const {baseCurrency, targetCurrency} = useSelector(
    state => state.selectedCurrenyReducer,
  );
  const {color} = useSelector(state => state?.selectedBackgroundColor);

  const [baseValue, setBaseValue] = useState(1);

  const [currencyRate, setCurrencyRate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState({open: false, from: 'base'});

  const baseURL = 'https://api.freecurrencyapi.com/v1/';
  const apiKey = 'uKVyqfBF3NLYFJJcL8Q99o1AgLXwCFk5TvtIFozm';

  const getCurrencyRate = async (targetCurrency, baseCurrency) => {
    try {
      setLoading(true);
      setError(null);
      setCurrencyRate(null);

      const res = await axios.get(
        `${baseURL}latest?apikey=${apiKey}&currencies=${targetCurrency}%2C${baseCurrency}`,
      );

      setCurrencyRate(res?.data?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrencyRate(targetCurrency, baseCurrency);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      {!!currencyRate && (
        <>
          {/* ---------------------------  Logo and Title */}
          <Image
            source={require('../../assets/images/converter-logo.png')}
            style={{
              width: width / 2.5,
              height: width / 2.5,
              resizeMode: 'center',
            }}
          />

          <Text
            style={{fontSize: 20, color: '#fff', fontFamily: 'Raleway-Bold'}}>
            Currency Converter
          </Text>

          {/* ---------------------- Setting Button */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Options')}
            style={{position: 'absolute', top: 10, right: 10}}>
            <Icon name="settings-outline" color={'#fff'} size={23} />
          </TouchableOpacity>

          {/* -----------------------------  input amount for converstion */}
          <CurrencyInput
            value={baseValue}
            showTextInput={true}
            onChangeText={text => {
              setBaseValue(text);
            }}
            onPress={() => {
              setShowModal({open: true, from: 'base'});
            }}
            country={baseCurrency}
          />

          {/* ---------------------- result of calculating currencies */}
          <CurrencyInput
            value={baseValue * currencyRate[targetCurrency]}
            onPress={() => {
              setShowModal({open: true, from: 'target'});
            }}
            country={targetCurrency}
          />

          <Text style={{color: '#fff', fontFamily: 'Raleway-Regular'}}>
            {currencyRate[baseCurrency]} {baseCurrency} ={' '}
            {currencyRate[targetCurrency]} {targetCurrency} as{' '}
            {moment(Date.now()).format('MMM DD, YYYY')}
          </Text>

          {/* =========================================  Button to reverse selected countries */}

          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5}}
            onPress={() => {
              selectedCurrency({
                baseCurrency: targetCurrency,
                targetCurrency: baseCurrency,
              });
            }}>
            <Icon name="md-repeat" color="#fff" size={23} />
            <Text style={{color: '#fff', fontFamily: 'Raleway-SemiBold'}}>
              Reverse
            </Text>
          </TouchableOpacity>
        </>
      )}

      {loading && <ActivityIndicator size={'large'} color={'#fff'} />}

      {/* ===========================  Modal for Static Countries List */}

      <Modal visible={showModal?.open} animationType="slide">
        <Text style={styles.modalHeaderContainer}>
          {showModal?.from == 'base' ? 'Base Currency' : 'Target Currency'}
        </Text>

        <FlatList
          data={countryList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor:
                  item ==
                  (showModal?.from == 'base' ? baseCurrency : targetCurrency) // used to change the background of selected country
                    ? 'orange'
                    : '#fff',
              }}
              onPress={() => {
                showModal?.from == 'base' // select country for base and target country
                  ? selectedCurrency({baseCurrency: item, targetCurrency})
                  : selectedCurrency({targetCurrency: item, baseCurrency});
                setShowModal({open: false, from: ''});

                getCurrencyRate(
                  showModal?.from == 'target' ? item : targetCurrency,
                  showModal?.from == 'base' ? item : baseCurrency,
                );
              }}>
              <Text style={{fontSize: 15}}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
};

export default Home;
