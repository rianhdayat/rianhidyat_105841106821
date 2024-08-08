import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [
  { id: '1', name: 'Nike Air VaporMax Evo', price: 'Rp. 80,000', rating: '5.0', image: require('./assets/nikeV.jpg') },
  { id: '2', name: 'Nike Air Max 2.0 Shoes', price: 'Rp. 80,000', rating: '4.5', image: require('./assets/nikeJ.jpg') },
  { id: '3', name: 'Nike Air Max 2.0 Shoes', price: 'Rp. 80,000', rating: '4.5', image: require('./assets/jordan.jpg') },
  { id: '4', name: 'Nike Air VaporMax Evo', price: 'Rp. 80,000', rating: '5.0', image: require('./assets/Scapper.jpg') },
  { id: '5', name: 'Nike Air Max 2.0 Shoes', price: 'Rp. 80,000', rating: '4.5', image: require('./assets/dunkLow.jpg') },
  { id: '6', name: 'Nike Air VaporMax Evo', price: 'Rp. 80,000', rating: '5.0', image: require('./assets/zoom.jpg') },
  { id: '7', name: 'Nike Air Max 2.0 Shoes', price: 'Rp. 80,000', rating: '4.5', image: require('./assets/air.jpg') },
  { id: '8', name: 'Nike Air VaporMax Evo', price: 'Rp. 80,000', rating: '5.0', image: require('./assets/dunk.jpg') },
  { id: '9', name: 'Nike Air Max 2.0 Shoes', price: 'Rp. 80,000', rating: '4.5', image: require('./assets/dub.jpg') },
  { id: '10', name: 'Nike Air VaporMax Evo', price: 'Rp. 80,000', rating: '5.0', image: require('./assets/sportswear.jpg') },
];

const HomeScreen = ({ cartItems, favoriteItems, addToCart, toggleFavorite }) => {
  const renderProduct = ({ item }) => (
    <View
      style={{
        width: '48%',
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: '#00f' }}>{item.price}</Text>
      <Text style={{ fontSize: 14, color: '#777' }}>{item.rating}</Text>
      <TouchableOpacity 
        style={{ position: 'absolute', top: 10, right: 10 }} 
        onPress={() => toggleFavorite(item)}
      >
        <Ionicons 
          name={favoriteItems.includes(item.id) ? 'heart' : 'heart-outline'} 
          size={24} 
          color={favoriteItems.includes(item.id) ? 'red' : 'black'} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ backgroundColor: '#00f', padding: 8, borderRadius: 8, marginTop: 10 }}
        onPress={() => addToCart(item)}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Buy/Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hi, Kjeunique! Welcome back</Text>
          <TouchableOpacity style={{ backgroundColor: '#00f', padding: 16, borderRadius: 8, marginVertical: 16 }}>
            <Text style={{ color: '#fff', fontSize: 16 }}>Biaya Sepatu Rebook dengan discount 15%</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 }}>
          {products.map(product => renderProduct({ item: product }))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
