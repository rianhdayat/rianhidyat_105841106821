import { StyleSheet, Text, View, Image, TextInput } from "react-native-web";
import React from "react";


const ForgotPasswordPage = () => {
    const TextInputCustom = ({ name, color }) => {
        return (
            <TextInput
                placeholder={`Masukan ${name}`}
                style={{
                    width: '90%',
                    height: 54,
                    borderWidth: 1,
                    borderColor: color,
                    paddingLeft: 10,
                    marginBottom: 10,
                    margin: 10,
                    minHeight: 50,
                }}
            />
        );
    };
    const ButtonCustom = ({ text, color }) => {
        return (
            <View
                style={{
                    width: '90%',
                    height: 50,
                    backgroundColor: color,
                    justifyContent: "center",
                    borderRadius: 20,
                    alignSelf: "center",
                    alignItems: "center",
                    marginBottom: 10,
                }}>
                <Text
                    style={{
                        textAlign: "flex-start",
                        fontWeight: "bold",
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
                    marginLeft: 10,
                    top:35
                }}>
                Forgot Password
            </Text>
            <View
                style={{
                    height: 50,
                    width: '100%',
                    top: 50,
                    left:20
                }}>
                <Text>
                    Please enter your email address. You will receive a link to create a new password via email.
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                top: 50,
            }}>
            <TextInputCustom name="Email" color="red" />

            </View>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                top: 70,
            }}>
            <ButtonCustom text="SEND" color="red" />
            </View>
        </View>
    );
}
export default ForgotPasswordPage;





// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerShown: false, tabBarIcon: ({ focused }) => (
//             <image
//               source= {focused ? HomeAktif : HomeInaktif}
//               style={{ width: 20, height: 20 }}
//               />
//           )
//         }}
//         />
//     </Tab.Navigator>
//   );
// }
