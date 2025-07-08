import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import AllFeatured from '../../components/AllFeatured';
import CategoryList from '../../components/CategoryList';
import Banners from '../../components/Banners';
import DealOfTheDay from '../../components/DealOfTheDay';
import ProductList from '../../components/ProductList';
import SpecialOffers from '../../components/SpecialOffers';
import FlatAndHeelsBanner from '../../components/FlatAndHeelsBanner';
import TrendingProducts from '../../components/TrendingProducts';
import NewArrivals from '../../components/NewArrivals';
import Sponserd from '../../components/Sponserd';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <View style={styles.dealOfTheDay}>
          <DealOfTheDay />
        </View>
        <View style={styles.productList}>
          <ProductList />
        </View>
        <View style={styles.specialOffers}>
          <SpecialOffers />
        </View>
        <View style={styles.flatAndHeels}>
          <FlatAndHeelsBanner />
        </View>
        <View style={styles.trendingProducts}>
          <TrendingProducts />
        </View>
        <View style={styles.newArrivals}>
          <NewArrivals />
        </View>
        <View style={styles.sponserd}>
          <Sponserd />
        </View>
      </ScrollView>
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
    marginBottom: 20,
  },
  dealOfTheDay: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  productList: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  specialOffers: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  flatAndHeels: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  trendingProducts: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  newArrivals: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sponserd: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
