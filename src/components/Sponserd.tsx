import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Shoes from '../assets/svg/shoes.svg';
import FA from 'react-native-vector-icons/FontAwesome';

const Sponserd = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sponserd</Text>
      <Shoes />
      <View style={styles.discountContainer}>
        <Text style={styles.discount}>up to 50% Off</Text>
        <FA name="angle-right" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sponserd;
