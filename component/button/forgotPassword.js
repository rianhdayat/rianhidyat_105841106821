import { StyleSheet, Text, View, Image, TextInput } from "react-native-web";
import React from "react";
import forgotPassword from './component/button/forgotPassword'


const App = () => {
    const TextInputCustom = ({ name, color }) => {
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
        );
    };
    const ButtonCustom = ({ text, color}) => {
        return (
            <View
                style={{
                    width: 300,
                    height: 30,
                    backgroundColor: color,
                    justifyContent: "center",
                    borderRadius: 20,
                    marginLeft: 10,
                    alignSelf: "center",
                    alignItems: "center",
                    marginBottom: 10,
                }}>
                    <Text
                        style={{
                            textAlign: "flex-start",
                            color: "white",
                            fontsize: 12,
                        }}>{text}
                    </Text>
            </View>
        )
    }
    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                    marginTop: 70,
                    marginLeft: 10,
                }}>
                    Forgot Password
            </Text>
        <View
            style={{
                width: 300,
                height: 50,
                marginLeft: 10,
            }}>
            <Text>
                Please enter your email address. You will receive a link to create a new password via email.
            </Text>
        </View>
            <TextInputCustom name="Email" color="red"/>
            <ButtonCustom text="Send" color="red"/>
        </View>
    );
}
export default forgotPassword;