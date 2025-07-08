import { View, Text, FlatList , StyleSheet} from 'react-native';
import React from 'react';
import { products } from '../constants/data';
import FA from 'react-native-vector-icons/FontAwesome';
import { w } from '../constants/dimensions';

const ProductList = () => {
  return (
    <View>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{gap:10}}
        renderItem={({ item }) => {
            const Icon = item.image;
          return (
            
            <View style={styles.container}>
                  <View style={styles.productImage}>
                    <Icon />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>{item.price}</Text>
                      <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                      <Text style={styles.discount}>{item.discount}</Text>
                    </View>
                    <View style={styles.reviewsContainer}>
                      <Text style={styles.avgRating}>{item.avgRating}</Text>
                      <View style={styles.ratingStars}>
                        {Array(5)
                          .fill('')
                          .map((_, index) => {
                            const avgRating = item.avgRating;
                            if (avgRating > index + 1) {
                              return <FA key={index} name="star" color={'#F7C73A'} />;
                            } else {
                              return <FA key={index} name="star-o" />;
                            }
                          })}
                      </View>
                      <Text>({item.reviews})</Text>
                    </View>
                  </View>
                </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical:10,
    borderWidth:0.5,
    width: w * 0.45,
    overflow:'hidden'
   
  },
  productImage: {
    marginBottom: 5,
    
  },
  content: {
    paddingHorizontal:8
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 0,
    
  },
  description: {
    fontSize: 12,
    marginBottom:5
    
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  price: {
    fontSize: 16,
    fontWeight: 500,
    marginRight: 5,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'grey',
    marginRight: 5,
  },
  discount: {
    color: 'red',
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  avgRating: {
    marginRight: 5,
  },
  ratingStars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default ProductList;
