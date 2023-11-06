import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ProductScreen/> */}
      <ProductDetailsScreen/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})