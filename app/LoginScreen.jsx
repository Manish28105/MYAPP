import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import navigation from "./(tabs)/navigation";
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const StoredUser = await AsyncStorage.getItem('user');

    if (!StoredUser) {
      Alert.alert(
        'Error',
        'No Account found. Please sign up frist.'
      );
      return;
    }

    const user = JSON.parse(StoredUser);

    if (
      email === user.email &&
      password === user.password
    ) {
      await AsyncStorage.setItem(
        'isLoggediIn',
        'true'
      );

      router.replace('/(tabs)/HomeScreen');
    } else {
      Alert.alert(
        'Error',
        'Invalid email or password'
      );
    }
  
  // if (!email || !password) {
  //   Alert.alert("Email and password required");
  //   return;
  // }
  // // Save login Status
  // await AsyncStorage.setItem('isLoggedIn', 'true');
  // router.replace('/(tabs)/HomeScreen');

};

return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={loginUser}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // style={styles.button}
        onPress={() => router.push('/SignupScreen')}
      >
        <Text style={styles.footerText}>
          Don't have an account?
          Sign Up
        </Text>
      </TouchableOpacity>

    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#ddd',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    fontSize: 14,
  },
});