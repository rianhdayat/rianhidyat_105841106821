import React from 'react';
import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProfilPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My profile</Text>
          <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'lightgrey', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
          <Image
            source={require('./assets/rian.jpg')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rian Hidayat</Text>
            <Text style={{ fontSize: 16, color: '#777' }}>rian1234@mail.com</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {renderOption("My orders", "Already have 12 orders")}
          {renderOption("Shipping addresses", "3 addresses")}
          {renderOption("Payment methods", "Visa **34")}
          {renderOption("Promocodes", "You have special promocodes")}
          {renderOption("My reviews", "Reviews for 4 items")}
          {renderOption("Settings", "Notifications, password")}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const renderOption = (title, subtitle) => (
  <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 14, color: '#777' }}>{subtitle}</Text>
    </View>
    <Text style={{ fontSize: 24 }}>›</Text>
  </TouchableOpacity>
);

export default ProfilPage;



// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'; 

// const App = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       <ScrollView>
//         <View style={{ padding: 16, backgroundColor: '#f8f8f8' }}>
//           <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
//           <Text style={{ fontSize: 16, fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: 'red' }}>Men</Text>
//           <Text style={{ fontSize: 16, color: '#888' }}>Women</Text>
//           <Text style={{ fontSize: 16, color: '#888' }}>Kids</Text>
//         </View>

//         <TouchableOpacity style={{ backgroundColor: 'red', padding: 20, alignItems: 'center', margin: 10, borderRadius: 8 }}>
//           <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>SUMMER SALES</Text>
//           <Text style={{ color: '#fff', fontSize: 14 }}>Up to 50% off</Text>
//         </TouchableOpacity>


//         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
//           <Image source={require('./assets/new.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
//           <Text style={{ fontSize: 18 }}>New</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
//           <Image source={require('./assets/clothes.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
//           <Text style={{ fontSize: 18 }}>Clothes</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
//           <Image source={require('./assets/shoes.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
//           <Text style={{ fontSize: 18 }}>Shoes</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
//           <Image source={require('./assets/accesories.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
//           <Text style={{ fontSize: 18 }}>Accessories</Text>
//         </View>
//       </ScrollView>

//     </View>
//   );
// };

// export default App;
