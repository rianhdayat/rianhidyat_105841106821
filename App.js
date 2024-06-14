import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'

const App = () => {
  const TextInputCoustum = ({name, color}) => {
    return(
      <TextInput
      placeholder={`Masukan ${name}`}
      style={{
        borderWidth:1,
        borderColor:'gray',
        width:200,
        height:40,
        borderRadius:25,
        paddingLeft:10,
        color:color,
        marginBottom:10
      }} 
      />  
    )
  }
  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <TextInputCoustum name="Username" color="yellow"/>
      <TextInputCoustum name="Email" color="green"/>
      <TextInputCoustum name="Password" color="red"/>
    </View>

  )
}

 
export default App;