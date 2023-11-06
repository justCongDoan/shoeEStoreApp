import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screens/ProductsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ProductScreen/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({})