import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import NewArrivalsBanner from '../assets/svg/new-arrivals.svg';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import { w } from '../constants/dimensions';

const NewArrivals = () => {
  return (
    <View>
      <NewArrivalsBanner width={'100%'} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>New Arrivals</Text>
          <Text style={styles.subtext}>Summer’ 25 Collections</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View all</Text>
            <FA6 name="arrow-right-long" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: w * 0.9,
    alignSelf: 'center',
    paddingVertical: 14,
    backgroundColor: '#fff',
    elevation: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  content: {},
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  subtext: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    borderRadius: 10,
    backgroundColor: '#f83758',
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 500,
    marginRight: 8,
  },
});

export default NewArrivals;
