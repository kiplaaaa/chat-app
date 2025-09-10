import { Ionicons } from "@expo/vector-icons";
import React, { useState} from "react";
import {View, TouchableOpacity, SafeAreaView, Text, TextInput} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function SignUpScreen() {
    const [secureTextEntry, setSecureTextEntry ] = useState(true);

    const passIsVisible = () => {
      setSecureTextEntry((prev) => !prev)
    }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f0f0f0' }}>     
        <Text style={{ fontSize: 24, marginBottom: 24 }}>Sign Up</Text>
        <TextInput
          placeholder="Email"
          style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, marginBottom: 16, backgroundColor: '#fff' }}  
          keyboardType="email-address"    
          autoCapitalize="none"
          autoCorrect={false}      
        /> 
        <View> 
          <TextInput  
              placeholder="Password"  
              style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, marginBottom: 16, backgroundColor: '#fff' }}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}            
          />
          
          <TouchableOpacity onPress={passIsVisible} style={{position: 'absolute', top: 10, right: 10}}>
            {secureTextEntry ? <MaterialCommunityIcons name="eye-off-outline" size={24} color="black" /> : <MaterialCommunityIcons name="eye-check-outline" size={24} color="black" /> }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ width: '100%', height: 40, backgroundColor: '#007aff', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Create Account</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}
