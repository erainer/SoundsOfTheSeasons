import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { Audio } from 'expo-av';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button 
        title="GoToHalloween" 
        onPress={() => navigation.navigate("Halloween")}
      />
    </View>
  )
}

function HalloweenScreen() {
  return (
    <View>
      <Text>Halloween</Text>
      <Button 
        title="Child Whispers" 
        // onPress={() => navigation.navigate("Halloween")}
      />
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Halloween" component={HalloweenScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
