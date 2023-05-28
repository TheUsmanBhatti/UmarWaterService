import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Favorite from '../screens/favorite/Favorite';
import Home from '../screens/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplicationVerifications from '../screens/applicationVerifications/ApplicationVerifications';

const Stack = createNativeStackNavigator()


const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name='ApplicationVerifications' component={ApplicationVerifications} /> */}
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Favorite' component={Favorite} />
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
