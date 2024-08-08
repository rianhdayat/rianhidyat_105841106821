import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CartScreen from './Cart';
import FavoritScreen from './Favorites';
import ProfilScreen from './ProfilPage';

const Tab = createBottomTabNavigator();

const MyTabs = ({ cartItems, favoriteItems, addToCart, toggleFavorite }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Favorit') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={33} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      })}
    >
      <Tab.Screen name="Home" options={{headerShown:false}}>
        {props => (
          <HomeScreen 
            {...props} 
            cartItems={cartItems} 
            favoriteItems={favoriteItems} 
            addToCart={addToCart} 
            toggleFavorite={toggleFavorite} 
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Cart" options={{headerShown:false}}>
        {props => <CartScreen {...props} cartItems={cartItems} />}
      </Tab.Screen>
      <Tab.Screen name="Favorit" options={{headerShown:false}}>
        {props => <FavoritScreen {...props} favoriteItems={favoriteItems} />}
      </Tab.Screen>
      <Tab.Screen name="Profil" component={ProfilScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

export default MyTabs;
