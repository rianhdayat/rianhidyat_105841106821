  import React from 'react';
  import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'; 

  const App = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>
          <View style={{ padding: 16, backgroundColor: '#f8f8f8' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: 'red' }}>Men</Text>
            <Text style={{ fontSize: 16, color: '#888' }}>Women</Text>
            <Text style={{ fontSize: 16, color: '#888' }}>Kids</Text>
          </View>

          <TouchableOpacity style={{ backgroundColor: 'red', padding: 20, alignItems: 'center', margin: 10, borderRadius: 8 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>SUMMER SALES</Text>
            <Text style={{ color: '#fff', fontSize: 14 }}>Up to 50% off</Text>
          </TouchableOpacity>


          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            <Image source={require('./assets/new.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>New</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            <Image source={require('./assets/clothes.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>Clothes</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            <Image source={require('./assets/clothes.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>Shoes</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            <Image source={require('./assets/accesories.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>Accessories</Text>
          </View>
        </ScrollView>

      </View>
    );
  };

  export default App;


  