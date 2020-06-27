import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import Home from './src/components/screens/home';

export default function App() {
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <RootNav/>
      
    </View>
    </Provider>
  );
}

