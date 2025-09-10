import React, { useState} from "react";
import {View, TouchableOpacity, SafeAreaView, Text, TextInput} from "react-native";

export default function SignUpScreen() {
    const [secureTextEntry, setSecureTextEntry ] = useState(true);


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
        <TextInput  
            placeholder="Password"  
            style={{ width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, marginBottom: 16, backgroundColor: '#fff' }}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            
        />
        <TouchableOpacity style={{ width: '100%', height: 40, backgroundColor: '#007aff', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Create Account</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}
