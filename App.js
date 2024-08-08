import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import MyTabs from './MyTabs';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const toggleFavorite = (item) => {
    if (favoriteItems.includes(item.id)) {
      setFavoriteItems(favoriteItems.filter(fav => fav !== item.id));
    } else {
      setFavoriteItems([...favoriteItems, item.id]);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="MyTabs">
          {props => (
            <MyTabs 
              {...props} 
              cartItems={cartItems} 
              favoriteItems={favoriteItems} 
              addToCart={addToCart} 
              toggleFavorite={toggleFavorite} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
