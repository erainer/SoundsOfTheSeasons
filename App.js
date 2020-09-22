
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Components/HomeScreen'
import FallScreen from './Components/FallScreen'
import HalloweenScreen from './Components/HalloweenScreen'
import ThanksgivingScreen from './Components/ThanksgivingScreen'
import FallNatureScreen from './Components/FallNatureScreen'
import WinterScreen from './Components/WinterScreen'
import ChristmasScreen from './Components/ChristmasScreen'
import NewYearsScreen from './Components/NewYearsScreen'
import WinterNatureScreen from './Components/WinterNatureScreen'
import SpringScreen from './Components/SpringScreen'
import EasterScreen from './Components/EasterScreen'
import StPatricksDayScreen from './Components/StPatricksDayScreen'
import SpringNature from './Components/SpringNatureScreen'
import SummerScreen from './Components/SummerScreen'
import FourthOfJulyScreen from './Components/FourthOfJulyScreen'
import SummerNatureScreen from './Components/SummerNatureScreen'
import CustomHeader from './Components/CustomHeader'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sounds of the Seasons">
          <Stack.Screen name="Sounds of the Seasons" component={HomeScreen}/>

          <Stack.Screen name="Fall" component={FallScreen}/>
          <Stack.Screen name="Halloween" component={HalloweenScreen}/>
          <Stack.Screen name="Thanksgiving" component={ThanksgivingScreen}/>
          <Stack.Screen name="Fall Nature" component={FallNatureScreen}/>

          <Stack.Screen name="Winter" component={WinterScreen}/>
          <Stack.Screen name="Christmas" component={ChristmasScreen}/>
          <Stack.Screen name="New Years" component={NewYearsScreen}/>
          <Stack.Screen name="Winter Nature" component={WinterNatureScreen}/>

          <Stack.Screen name="Spring" component={SpringScreen}/>
          <Stack.Screen name="Easter" component={EasterScreen}/>
          <Stack.Screen name="St. Patricks Day" component={StPatricksDayScreen}/>
          <Stack.Screen name="Spring Nature" component={SpringNature}/>

          <Stack.Screen name="Summer" component={SummerScreen}/>
          <Stack.Screen name="Fourth of July" component={FourthOfJulyScreen}/>
          <Stack.Screen name="Summer Nature Events" component={SummerNatureScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

