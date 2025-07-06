import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { banners } from '../constants/data';

const Banners = () => {
  return (
    <View>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          data={banners}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => {
            return <item.Icon />;
          }}
        />
      </View>
      <View style={styles.dotContainer}>
        {banners.map((_, index) => (
          <View key={index} style={styles.dot}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
