import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { w, h } from '../../constants/dimensions';
import Logo from '../../assets/svg/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type SplashNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'Splash'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SplashScreen;
