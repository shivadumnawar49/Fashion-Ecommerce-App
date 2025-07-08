import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Heels from '../assets/svg/heels.svg';
import { w } from '../constants/dimensions';
import FA6 from 'react-native-vector-icons/FontAwesome6';

const FlatAndHeelsBanner = () => {
  return (
    <View style={styles.container}>
      <Heels />
      <View style={styles.content}>
        <Text style={styles.title}>Flat and Heels</Text>
        <Text style={styles.subtext}>Stand a chance to get rewarded</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Visit now</Text>
            <FA6 name="arrow-right-long" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  content: {},
  title: {
    fontSize: 18,
    fontWeight: 500,
    textAlign:'center'
  },
  subtext: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
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

export default FlatAndHeelsBanner;
