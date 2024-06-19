import React from 'react'
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/home';
import { Profile } from '../pages/Profile';
import Icon from '@expo/vector-icons/Ionicons';

const TabBatatinha = createBottomTabNavigator();

export function BottomTabRoutes() {

  return (
    <TabBatatinha.Navigator
    
    screenOptions={{tabBarStyle:{
      backgroundColor:'#3B0069',
      height:60
  }, headerStyle:{
      backgroundColor: '#3B0069',

  },
  }}>
      <TabBatatinha.Screen name='a' component={Home} 
      options={{
        tabBarIcon: ({  focused }) => (
        <>
          <Icon name="home" color={focused ? '#fff' : '#fff'} size={20} />
          <Text  style={{fontSize:10, color: focused ?'#fff' : '#fff'}}> Home</Text>
        </>
        ),
      }}/>

      <TabBatatinha.Screen name='aa' component={Profile} 
      options={{
        
        tabBarIcon: ({ focused}) => (
        <>
          <Icon name="person-outline" color={focused ? '#fff' : '#fff'} size={20} />
          <Text  style={{fontSize:10, color: focused ?'#fff' : '#fff'}}> Profile</Text>
        </>
        ),
        
      }}/>
    </TabBatatinha.Navigator>
  )
}