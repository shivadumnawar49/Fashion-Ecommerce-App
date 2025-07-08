import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Wishlist from '../screens/Wishlist/Wishlist';
import Cart from '../screens/Cart/Cart';
import Search from '../screens/Search/Search';
import Settings from '../screens/Settings/Settings';

const AppStack = createNativeStackNavigator();

export type AppStackParams = {
  Home: undefined;
};

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export type TabParams = {
  HomeStack: undefined;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f83758',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={AppNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              color={focused ? '#f83758' : '#000'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="heart"
              color={focused ? '#f83758' : '#000'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              color={focused ? '#f83758' : '#000'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              color={focused ? '#f83758' : '#000'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              color={focused ? '#f83758' : '#000'}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
