import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Root from './src/Navigation/Root';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Root />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
