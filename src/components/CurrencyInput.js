import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const CurrencyInput = ({value, showTextInput, onChangeText, onPress, country}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.countryBtnContainer}>
        <Text style={{fontSize: 16, fontFamily: 'Raleway-SemiBold', color: 'gray'}}>
          {country}
        </Text>
      </TouchableOpacity>

      {showTextInput ? (
        <TextInput
          value={value.toString()}
          onChangeText={onChangeText}
          placeholder="0"
          style={styles.currencyInput}
        />
      ) : (
        <Text style={[styles.currencyInput, {backgroundColor: '#e4e7ed'}]}>{value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
  },
  countryBtnContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyInput: {
    padding: 12,
    flex: 5,
    borderLeftWidth: 1,
    fontFamily: 'Raleway-Regular',
    color: '#000',
    borderColor: '#d5d5d5',
  },
});

export default CurrencyInput;
