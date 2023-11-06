import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation/>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})