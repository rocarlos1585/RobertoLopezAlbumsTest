import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PhotosScreen } from '../screens/PhotosScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
        <Stack.Screen name="AlbumsScreen" component={AlbumsScreen} />
        <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
      
    </Stack.Navigator>
  );
}