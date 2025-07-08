import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import { trendingProducts } from '../constants/data';
import { w } from '../constants/dimensions';

const TrendingProducts = () => {
  return (
    <View>
      <View style={styles.banner}>
        <View>
          <Text style={styles.title}>Trending Products</Text>
          <View style={styles.timeView}>
            <MaterialIcons name="calendar-month" size={20} color={'#fff'} />
            <Text style={styles.subtext}>Last Date 15/07/2025</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View all</Text>
            <FA6 name="arrow-right-long" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={trendingProducts}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => {
          const Icon = item.Icon;
          return (
            <View style={styles.product}>
              <Icon />
              <View style={styles.content}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                </View>
                <Text style={styles.discount}>{item.discount}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fd6e86',
    height: 72,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  title: { fontSize: 18, color: '#fff', fontWeight: 500, marginBottom: 5 },
  timeView: { flexDirection: 'row', alignItems: 'center' },
  subtext: { color: '#fff', marginLeft: 6, fontSize: 16 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    paddingHorizontal: 8,
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
  product: { backgroundColor: '#fff', elevation: 5, borderRadius: 10, marginBottom:20 },
  content: {
    marginTop: 8,
    paddingLeft: 8,
    marginBottom: 8,
  },

  productTitle: { width: w * 0.35 },
  priceContainer: { flexDirection: 'row' },
  price: { marginRight: 5 },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  discount: { color: 'red' },
});

export default TrendingProducts;
