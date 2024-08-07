import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';

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

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true); 

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={{
        width: '48%',
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('Detail', { product: item })}
    >
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: '#00f' }}>{item.price}</Text>
      <Text style={{ fontSize: 14, color: '#777' }}>{item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}>
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

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Special Offer!</Text>
            <Image source={require('./assets/Scapper.jpg')} style={{ width: 250, height: 150, marginBottom: 10 }} />
            <Text style={{ fontSize: 16, marginBottom: 20 }}>Get 20% off on your next purchase!</Text>
            <TouchableOpacity
              style={{ backgroundColor: '#007BFF', padding: 10, borderRadius: 5 }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

