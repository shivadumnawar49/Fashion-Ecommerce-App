import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FA6 from 'react-native-vector-icons/FontAwesome6';

const DealOfTheDay = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Deal of the Day</Text>
        <View style={styles.timeView}>
          <MaterialIcons name="alarm" size={20} color={'#fff'} />
          <Text style={styles.subtext}>22h 45m 30s remaining</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View all</Text>
          <FA6 name="arrow-right-long" size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4392f9',
    height: 72,
    borderRadius: 10,
    padding: 10,
  },

  title: { fontSize: 18, color: '#fff', fontWeight: 500, marginBottom: 5 },
  timeView: { flexDirection: 'row', alignItems: 'center' },
  subtext: { color: '#fff', marginLeft: 6, fontSize: 16 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    paddingHorizontal:8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 500,
    marginRight: 8,
  },
});

export default DealOfTheDay;
