import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Logo from '../assets/svg/logo1.svg';
import { h, w } from '../constants/dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <View style={styles.header}>
      <Feather name="menu" size={30} />
      <Logo  />
      <Feather name="user" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'space-between'
  }
});

export default Header;
