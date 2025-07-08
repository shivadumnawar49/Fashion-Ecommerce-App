import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ViewToken,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { banners } from '../constants/data';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import { w } from '../constants/dimensions';

const Banners = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    [],
  );
  return (
    <View>
      <View style={styles.banners}>
        <FlatList
          data={banners}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          snapToInterval={w * 0.88 + 10 * 2}
          snapToAlignment="start"
          decelerationRate={'fast'}
          contentContainerStyle={{ gap: 16 }}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          onViewableItemsChanged={onViewableItemsChanged}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.bannerWidth}>
                  <item.Icon />
                </View>
                <View style={styles.content}>
                  <Text style={styles.discount}>50-40% OFF</Text>
                  <Text style={styles.subtext}>Now in (product)</Text>
                  <Text style={[styles.subtext, { marginBottom: 16 }]}>
                    All colours
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Shop Now</Text>
                    <FA6 name="arrow-right-long" size={20} color={'#fff'} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.dotContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#F7899C' : '#CCCCCC',
              },
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banners: { paddingHorizontal: 10 },
  bannerWidth: { width: w * 0.89 },
  content: { position: 'absolute', top: 30, left: 16 },
  discount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtext: { fontSize: 16, color: '#fff' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
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
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'grey',
  },
});

export default Banners;
