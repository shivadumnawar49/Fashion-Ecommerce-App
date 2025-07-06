import { StyleSheet, View , StatusBar} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f9f9f9'
  },
});

export default App;
