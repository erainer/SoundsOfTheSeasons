import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Screens/HomeScreen';
import FallScreen from './Components/Screens/FallScreen';
import WinterScreen from './Components/Screens/WinterScreen';
import SpringScreen from './Components/Screens/SpringScreen';
import SummerScreen from './Components/Screens/SummerScreen';

//import { Audio } from 'expo-av';

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sounds of the Seasons">
          <Stack.Screen name="Sounds of the Seasons" component={HomeScreen}/>
          <Stack.Screen name="Fall" component={FallScreen}/>
          <Stack.Screen name="Winter" component={WinterScreen}/>
          <Stack.Screen name="Spring" component={SpringScreen}/>
          <Stack.Screen name="Summer" component={SummerScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
