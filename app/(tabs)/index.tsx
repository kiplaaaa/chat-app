import React from 'react';
import { Text, StyleSheet, View } from 'react-native';



export default function HomeScreen() {
  return (  
    <View style={styles.titleContainer}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to the Chat App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
