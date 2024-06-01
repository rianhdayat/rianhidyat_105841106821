import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const App = () => {
  return (
   <View style={{
    flex:1,
    backgroundColor:'black'}}>
    <View style>
      <Text style={{
        fontSize:30,
        textAlign:'center',
        top: 300      ,
        bottom: 0,
        justifyContent:'center',
        fontSize: 50,
        fontFamily: 'inkfree',  
        color: 'red',
        
      }}>
        adakah coto</Text>
    </View>
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      top: 200,

    }}>
      <Image source={require('./assets/coto.png')} style={{
        width:200,
        height:200,
        resizeMode:'contain'
        
      }}/>
      </View>
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
          width:80,
          height:40,
          justifyContent:'center',
          borderRadius:25,
          
        }}>
          <Text style={{
            textAlign:'center',
            fontSize:15,
            color:'white'
            
            }}>
              Login</Text>
        </View>

        <View style={{
          backgroundColor:'red',
          width:80,
          height:40,
          justifyContent:'center',
          borderRadius:25
        }}>
          <Text style={{
            textAlign:'center',
            fontSize:15,
            color:'white'}}>
              Register</Text>
        </View>

      </View>
   </View>
  )
}

export default App