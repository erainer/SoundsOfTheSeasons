
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import FallScreen from './Components/FallScreen';
import WinterScreen from './Components/WinterScreen';
import SpringScreen from './Components/SpringScreen';
import SummerScreen from './Components/SummerScreen';
import HalloweenScreen from './Components/HalloweenScreen';
import ThanksgivingScreen from './Components/ThanksgivingScreen';
import FallNatureScreen from './Components/FallNatureScreen';

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
          <Stack.Screen name="Halloween" component={HalloweenScreen}/>
          <Stack.Screen name="Thanksgiving" component={ThanksgivingScreen}/>
          <Stack.Screen name="FallNature" component={FallNatureScreen}/>
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
