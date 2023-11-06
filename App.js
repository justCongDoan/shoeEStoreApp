import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ProductScreen/> */}
      {/* <ProductDetailsScreen/> */}
      <ShoppingCart/>
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