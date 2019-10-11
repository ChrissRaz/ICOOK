/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Navigation from './src/navigation/navigation';


import Login from './src/pages/Login';
import { from } from 'rxjs';

const App: () => React$Node = () => {

  
  return (
    <View style={styles.base}>
      <Navigation/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  base:
  {
    flex: 1
  }
});

export default App;
