// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeAktif from './assets/home-aktif.jpg';
// import HomeInaktif from './assets/home-inaktif.jpg';
// import Shop from './assets/shop.jpg';
// import ShopInaktif from './assets/shop-inaktif.jpg';
// import bagAKtif from './assets/bag-aktif.jpg';
// import bagInaktif from './assets/bag-inaktif.jpg';
// import favoriteAktif from './assets/favorite-aktif.jpg';
// import favoriteInaktif from './assets/favorite-inaktif.jpg';
// import profileAktif from './assets/profile-aktif.jpg';
// import profileInaktif from './assets/profile-inaktif.jpg';
// import HomeScreen from './HomeScreen';
// import ShopPage from './ShopPage';
// import BagPage from './BagPage';
// import Favorites from './Favorites';
// import ProfilPage from './ProfilPage';

// const Tab = createBottomTabNavigator();

// const myTabs = () => {
//   return (
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//               source={focused ? HomeAktif : HomeInaktif}
//               style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Shop"
//           component={ShopPage}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//               source={focused ? Shop : ShopInaktif}
//               style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Bag"
//           component={BagPage}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//               source={focused ? bagAKtif : bagInaktif}
//               style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Favorites"
//           component={Favorites}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//               source={focused ? favoriteAktif : favoriteInaktif}
//               style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfilPage}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//               source={focused ? profileAktif : profileInaktif}
//               style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
          
//       </Tab.Navigator>
//   )
// }

// export default myTabs


import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/home-aktif.jpg';
import HomeInaktif from './assets/home-inaktif.jpg';
import Shop from './assets/shop.jpg';
import ShopInaktif from './assets/shop-inaktif.jpg';
import bagAKtif from './assets/bag-aktif.jpg';
import bagInaktif from './assets/bag-inaktif.jpg';
import favoriteAktif from './assets/favorite-aktif.jpg';
import favoriteInaktif from './assets/favorite-inaktif.jpg';
import profileAktif from './assets/profile-aktif.jpg';
import profileInaktif from './assets/profile-inaktif.jpg';
import HomeScreen from './HomeScreen';
import ProfilPage from './ProfilPage';

const Tab = createBottomTabNavigator();

const myTabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
       
        
        <Tab.Screen
          name="Profile"
          component={ProfilPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
              source={focused ? profileAktif : profileInaktif}
              style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
          
      </Tab.Navigator>
  )
}

export default myTabs