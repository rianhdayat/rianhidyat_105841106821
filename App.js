import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const App = () => {
  return (
   <View style={{flex:1}}>
      <View style={{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:100
      }}>
        <View style={{
          backgroundColor:'red',
          width:120,
          height:80,
          justifyContent:'center',
          borderRadius:5
        }}>
          <Text style={{
            textAlign:'center',
            fontSize:30,
            color:'white'}}>
              Login</Text>
        </View>
        <View style={{
          backgroundColor:'blue',
          width:120,
          height:80,
          justifyContent:'center',
          borderRadius:25
        }}>
          <Text style={{
            textAlign:'center',
            fontSize:30,
            color:'white'}}>
              Register</Text>
        </View>
        
      </View>
   </View>
  )
}

export default App