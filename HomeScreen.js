import React from "react";
import { View, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={require('./assets/model.jpg')}
        style={{ width: '100%', height: '100%' }} />

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 30,
          color: 'white',
          fontFamily: 'MetroBold',
          bottom: 100,
        }}>FASHION SHALE</Text>
        <TouchableOpacity style={{
          borderRadius: 10,
          backgroundColor: 'red',
          width: 100,
          bottom: 80,
          alignItems: 'center',
          padding: 7,
        }} onPress={() => navigation.navigate('ShopPage')}>
          <Text style={{
            fontSize: 14,
            fontFamily: 'MetroMedium',
            color: 'white',
          }}>Check</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen;