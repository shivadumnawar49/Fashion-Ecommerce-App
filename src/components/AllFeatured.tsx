import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SortIcon from '../assets/svg/sort.svg';
import FilterIcon from '../assets/svg/filter.svg';

const AllFeatured = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Featured</Text>
      <View style={styles.rightContainer}>
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort</Text>
          <SortIcon width={20} height={20} />
        </View>
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Filter</Text>
          <FilterIcon width={20} height={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
  },
  sortText: {
    fontSize: 16,
    marginRight: 5,
  },
});

export default AllFeatured;
