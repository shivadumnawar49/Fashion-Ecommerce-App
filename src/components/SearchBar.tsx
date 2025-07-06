import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.searchbar}>
      <MaterialIcons name="search" size={30} color={'#bbbbbb'} />
      <TextInput
        placeholder="Search any Product.."
        placeholderTextColor={'#BBBBBB'}
        style={styles.textInput}
      />
      <MaterialIcons name="mic-none" size={30} color={'#bbbbbb'} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 48,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    color: '#000',
    fontSize: 16,
  },
});

export default SearchBar;
