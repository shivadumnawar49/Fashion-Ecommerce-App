import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SpecialOffer from '../assets/svg/special-offer.svg';

const SpecialOffers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <SpecialOffer />
      </View>
      <View>
        <Text style={styles.title}>Special Offers</Text>
        <Text style={styles.subtext}>
          We make sure you get the offer you need at best prices
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius:10,
    elevation:5
  },
  image: {
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  subtext: {
    fontSize:14,
    width: '70%',
  },
});

export default SpecialOffers;
