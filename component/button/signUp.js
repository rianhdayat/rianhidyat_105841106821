import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from "react";
import signUp from './component/button/signUp'

const App = () => {
   
  const TextInputCustom = ({name, color}) => {
    return (
      <TextInput
      placeholder={`Masukan ${name}`}
      style={{
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: color,
        paddingLeft: 10,
        marginBottom: 10,
        margin: 10,
      }}
      />
    )
  }
 const ButtonCustom = ({text, color}) => {
  return (
    <View style={{
      width: 300,
      height: 30,
      backgroundColor: color,
      justifyContent: 'center',
      borderRadius: 20,
      marginLeft: 10,
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 10,
    }}>
      <Text style={{
        textAlign: 'flex-start',
        color: 'white',
        fontsize: 12,
      }}>{text}
      </Text>  
    </View>
  )
 }
 return (
  <View>
   <Text style={{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 70,
    marginLeft: 10,
    
   }}>
      Sign Up
   </Text>
    <TextInputCustom name="Username" color="black"/>
    <TextInputCustom name="Email" color="black"/>
    <TextInputCustom name="Password" color="black"/>
    
    <Text style={{
      fontSize: 12,
      marginTop: 20,
      marginLeft: 10,
      marginBottom: 10,  
      alignSelf: 'flex-end',

    }}>
      Already have an account?
    </Text>
    <ButtonCustom text="Sign Up" color="red"/>

    <Text style={{
      marginTop: 70,
      textAlign: 'center',
      
    }}>
      Or Sign Up With Social account 
    </Text>

    <View style={{
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'center',
      marginHorizontal: 8,
    }}>
      <Image
        source={require('./assets/google.png')}
        style={{
          width: 50,
          height: 50,
          padding: 20,
          borderRadius: 10,
          marginRight: 20,
        }}
        />
      <Image
        source={require('./assets/facebook.png')}
        style={{width: 50, height: 50, borderRadius: 10, marginRight: 20}}>
      </Image>
    </View>
  </View>
 )

}

export default  signUp;