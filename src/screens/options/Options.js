//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// create a component
const Options = ({navigation}) => {
  const {color} = useSelector(state => state?.selectedBackgroundColor);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <CustomButton
        title={'Themes'}
        onPress={() => {
          navigation.navigate('Themes');
        }}
      />
      <CustomButton title={'Fixer.io'} onPress={() => {}} />
      <CustomButton title={'Logout'} onPress={() => {}} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  customBtnCon: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default Options;

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customBtnCon}>
      <Text style={{fontSize: 16, color: '#000'}}>{title}</Text>
      <Icon name={'chevron-forward'} size={23} color={'gray'} />
    </TouchableOpacity>
  );
};
