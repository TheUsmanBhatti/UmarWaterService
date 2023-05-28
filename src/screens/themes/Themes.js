//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {setBackgroundColor} from '../../redux/actions/themeAction';
import {useSelector} from 'react-redux';

// create a component
const Themes = () => {
  const {color} = useSelector(state => state?.selectedBackgroundColor);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <CustomButton
        title={'Blue'}
        color={'blue'}
        onPress={() => setBackgroundColor({color: 'blue'})}
      />
      <CustomButton
        title={'Orange'}
        color={'orange'}
        onPress={() => setBackgroundColor({color: 'orange'})}
      />
      <CustomButton
        title={'Green'}
        color={'green'}
        onPress={() => setBackgroundColor({color: 'green'})}
      />
      <CustomButton
        title={'Purple'}
        color={'purple'}
        onPress={() => setBackgroundColor({color: 'purple'})}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customBtnCon: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default Themes;

const CustomButton = ({title, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customBtnCon}>
      <Text style={{fontSize: 16, color: '#000'}}>{title}</Text>

      <View
        style={{
          width: 15,
          height: 15,
          borderRadius: 10,
          backgroundColor: color,
        }}
      />
    </TouchableOpacity>
  );
};
