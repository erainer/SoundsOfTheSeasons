
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Components/Screens/HomeScreen'
import FallScreen from './Components/Screens/Fall/FallScreen'
import HalloweenScreen from './Components/Screens/Fall/HalloweenScreen'
import ThanksgivingScreen from './Components/Screens/Fall/ThanksgivingScreen'
import FallNatureScreen from './Components/Screens/Fall/FallNatureScreen'
import WinterScreen from './Components/Screens/Winter/WinterScreen'
import ChristmasScreen from './Components/Screens/Winter/ChristmasScreen'
import NewYearsScreen from './Components/Screens/Winter/NewYearsScreen'
import WinterNatureScreen from './Components/Screens/Winter/WinterNatureScreen'
import SpringScreen from './Components/Screens/Spring/SpringScreen'
import EasterScreen from './Components/Screens/Spring/EasterScreen'
import StPatricksDayScreen from './Components/Screens/Spring/StPatricksDayScreen'
import SpringNature from './Components/Screens/Spring/SpringNatureScreen'
import SummerScreen from './Components/Screens/Summer/SummerScreen'
import FourthOfJulyScreen from './Components/Screens/Summer/FourthOfJulyScreen'
import SummerNatureScreen from './Components/Screens/Summer/SummerNatureScreen'
import imageLibrary from './Components/imageLibrary'
import { AppLoading } from 'expo'
import SoundManager from './Components/SoundManager'

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    SoundManager.load()
    return (
        <NavigationContainer>
          
        <Stack.Navigator initialRouteName="Sounds of the Seasons">
          <Stack.Screen name="Sounds of the Seasons" component={HomeScreen} />

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
    )
  }
}

