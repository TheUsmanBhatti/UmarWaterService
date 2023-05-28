import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Options from '../screens/options/Options';
import Themes from '../screens/themes/Themes';

const Stack = createNativeStackNavigator()


const MainStack = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Options"
            component={Options}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Themes"
            component={Themes}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default MainStack;
