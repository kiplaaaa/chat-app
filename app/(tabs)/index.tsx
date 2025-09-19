import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/components/firebase";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    try {
      if (email !== '' && password !== '') {
        const user = await signInWithEmailAndPassword(auth, email, password)
        if (user) {
          router.replace('/(tabs)/explore')
        }
      }
      else{
        console.log('Fill in all fields')
      }
    }
    catch (error) {
        console.error('error', error)
    }
  }

  const handleSignUp = async() => {
    try{
      if(email !== '' && password !== '') {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        if(user){
          router.replace('/(tabs)/explore')
        }
      }
      else{
        console.log('Fil in all fields')
      }
    }
    catch(error){
      console.error('Error', error)
    }
  }
  const passIsVisible = () => {
    setSecureTextEntry((prev) => !prev)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 24, marginBottom: 24 }}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, marginBottom: 16, backgroundColor: '#fff' }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, marginBottom: 16, backgroundColor: '#fff' }}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={passIsVisible} style={{ position: 'absolute', top: 10, right: 10 }}>
          {secureTextEntry ? <MaterialCommunityIcons name="eye-off-outline" size={24} color="black" /> : <MaterialCommunityIcons name="eye-check-outline" size={24} color="black" />}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignUp} style={{ width: '100%', height: 40, backgroundColor: '#007aff', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogIn} style={{ width: '100%', height: 40, backgroundColor: '#007aff', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>LogIn Account</Text>
      </TouchableOpacity>

    </View>
  );
}
