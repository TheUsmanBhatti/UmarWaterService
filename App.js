import React, {useRef, useState} from 'react';

import {SafeAreaView, StyleSheet, LogBox} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
let persistor = persistStore(store);

import MainStack from './src/navigations/MainStack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <MainStack />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
