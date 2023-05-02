import React, { useRef, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  LogBox
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import MainStack from './src/navigations/MainStack';

const App = () => {
  return (
    <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <MainStack />
        </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
