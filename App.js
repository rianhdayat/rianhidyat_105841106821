import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from "react";


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
      }}/>
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
      Forgot Password?
   </Text>
   <Text style={{
      fontSize: 14,
      lineHeight: '20px',
      marginLeft: 10,
      marginBottom: 10,
      fontFamily: 'metropolis',
    }}>
      Please enter your email address. You will receive <br/>
      a link to create a new password via email. 
   </Text>
    <TextInputCustom name="Email" color="red"/>
    <ButtonCustom text="Send" color="red"/>
  </View>
 )

}

export default  App;