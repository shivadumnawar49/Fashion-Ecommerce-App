import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import AllFeatured from '../../components/AllFeatured';
import CategoryList from '../../components/CategoryList';
import Banners from '../../components/Banners';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.searchbar}>
        <SearchBar />
      </View>
      <View style={styles.allFeatured}>
        <AllFeatured />
      </View>
      <View style={styles.categoryList}>
        <CategoryList />
      </View>
      <View>
        <Banners />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  header: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchbar: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  allFeatured: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryList: {
    paddingHorizontal: 10,
    marginBottom:20
  },
});

export default HomeScreen;
