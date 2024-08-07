// import React from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

// const Categories = () => {
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: '#fff'
//     }}>
//       <ScrollView>
//         <View style={{
//           padding: 16,
//           backgroundColor: '#f8f8f8'
//         }}>
//           <Text style={{
//             fontSize: 20,
//             fontWeight: 'bold'
//           }}>Categories</Text> 
//         </View>

//         <View style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around',
//           paddingVertical: 10
//         }}>
//           <Text style={{
//             fontSize: 16,
//             fontWeight: 'bold',
//             borderBottomWidth: 2,
//             borderBottomColor: 'red'
//           }}>Men
//           </Text>
//           <Text style={{
//             fontSize: 16,
//             color: '#888'
//           }}>Women
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   )    

// }


import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const brands = ['Nike', 'Puma', 'Adidas'];
const products = [
  { id: '1', brand: 'Nike', name: 'Nike Air VaporMax Evo', price: 'Rp. 80,000', rating: '5.0', image: require('./assets/nikeV.jpg') },
  { id: '2', brand: 'Nike', name: 'Nike Air Max 2.0 Shoes', price: 'Rp. 80,000', rating: '4.5', image: require('./assets/nikeJ.jpg') },
  { id: '3', brand: 'Adidas', name: 'Adidas Yun White', price: 'Rp. 70,000', rating: '4.0', image: require('./assets/adidasY.jpg') },
];

const App = () => {
  const renderProduct = ({ item }) => (
    <View style={{ flex: 1, padding: 16, margin: 8, backgroundColor: '#fff', borderRadius: 8, alignItems: 'center' }}>
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: '#00f' }}>{item.price}</Text>
      <Text style={{ fontSize: 14, color: '#777' }}>{item.rating}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hi, Sultan! Welcome back</Text>
          <TouchableOpacity style={{ backgroundColor: '#00f', padding: 16, borderRadius: 8, marginVertical: 16 }}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Biaya Sepatu Rebook dengan discount 15%</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Beli Sekarang</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
            {brands.map(brand => (
              <TouchableOpacity key={brand} style={{ backgroundColor: '#f00', padding: 8, borderRadius: 8 }}>
                <Text style={{ color: '#fff' }}>{brand}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            numColumns={2}
            style={{ marginHorizontal: -8 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

