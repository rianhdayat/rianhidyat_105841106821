import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('./assets/hero-2.png')} 
                style={styles.image} 
                resizeMode="contain"
            />
            <Text style={styles.title}>Great way to upgrade your style!</Text>
            <Text style={styles.subtitle}>
                Light, Flexible, and Forward. Vandeu shoes are designed for all-day comfort, so you can wear them anywhere, any time.
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Get Started</Text>
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
    image: {
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#a5a5a5',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#121212',
    },
});

export default SplashScreen;
