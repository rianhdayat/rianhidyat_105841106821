// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
// import ForgotPassword from './ForgotPasswordPage';
// import MyTabs from './myTabs';
// import HomeScreen from './HomeScreen';
// import ShopPage from './ShopPage';

// const Stack = createNativeStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName='LoginPage'>
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="MyTabs" component={MyTabs} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SignUp" component={SignUpPage} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="ShopPage" component={ShopPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

