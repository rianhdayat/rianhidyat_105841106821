

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


const DetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

 
  const additionalImages = [
    require('./assets/nikeV.jpg'),
    require('./assets/nikeV.jpg'),
    require('./assets/nikeV.jpg'),
    require('./assets/nikeV.jpg'),
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
      }}
    >
    
      <Image
        source={product.image}
        style={{
          width: '100%',
          height: 300,
          resizeMode: 'cover',
          borderRadius: 8,
        }}
      />

     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 16,
        }}
      >
        {additionalImages.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{
              width: 70,
              height: 70,
              borderRadius: 8,
              marginRight: 8,
            }}
          />
        ))}
      </View>

    
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#00f',
          }}
        >
          {product.price}
        </Text>
      </View>

      
      <View style={{ marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Ukuran:
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          42 
        </Text>
      </View>

    
      <View style={{ marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
          }}
        >
          Deskripsi:
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#555',
          }}
        >
          Sepatu ini adalah salah satu model terbaru dari Nike dengan teknologi terbaru yang menawarkan kenyamanan dan dukungan optimal. Cocok untuk aktivitas sehari-hari maupun olahraga.
        </Text>
      </View>

   
      <TouchableOpacity
        style={{
          backgroundColor: '#007BFF',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => {/* Tindakan beli */}}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Beli Sekarang
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;
