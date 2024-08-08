import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPasswordPage = ({ navigation }) => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#a5a5a5"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TouchableOpacity style={styles.button} onPress={() => { /* handle forgot password */ }}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#1e1e1e',
        borderRadius: 25,
        color: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212',
        textAlign: 'center',
    },
    linkText: {
        color: '#a5a5a5',
        marginTop: 10,
    },
});

export default ForgotPasswordPage;
