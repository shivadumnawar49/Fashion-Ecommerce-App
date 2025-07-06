import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { categoryList } from '../constants/data';

const CategoryList = () => {
  return (
    <FlatList
      data={categoryList}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 16,
      }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.categoryContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  categoryContainer: { justifyContent: 'center', alignItems: 'center' },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
  },
});

export default CategoryList;
