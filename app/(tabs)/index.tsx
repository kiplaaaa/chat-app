import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function HomeScreen() {
  return (  
    <GiftedChat
      messages={[]}
      onSend={messages => console.log(messages)}
      alwaysShowSend
      placeholder="Type a message..."
      user={{
        _id: 1,
      }}
    />
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
