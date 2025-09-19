import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        statusBarAnimation: 'slide',
        headerStyle: {
          backgroundColor: 'gray',
        }
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'SignUp',
        }}
      />
      <Stack.Screen name='chat' options={{
        title: 'Chat'
      }} />
      <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Stack>
  );
}
