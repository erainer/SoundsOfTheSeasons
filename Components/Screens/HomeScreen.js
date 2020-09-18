import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View styles={StyleSheet.container}>
            <Button
                styles={StyleSheet.button} 
                title="Fall" 
                onPress={() => this.props.navigation.navigate('Fall')}
            />
            <Button 
                styles={StyleSheet.button} 
                title="Winter" 
                onPress={() => this.props.navigation.navigate('Winter')}
            />
            <Button 
                styles={StyleSheet.button} 
                title="Spring" 
                onPress={() => this.props.navigation.navigate('Spring')}
            />
            <Button
                styles={StyleSheet.button} 
                title="Summer" 
                onPress={() => this.props.navigation.navigate('Summer')}
            />
            
        </View>
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
    buttons: {

    }
  });