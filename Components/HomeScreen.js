import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';

export default class HomeScreen extends Component {
    render() {
        return (

            <ImageBackground 
                source={require('../assets/backgrounds/all-four-seasons-background.jpeg')}
                style={{width: '100%', height: '100%'}} >

                <CustomButton 
                    title="Fall"
                    onPress={() => this.props.navigation.navigate('Fall')}
                />
                <CustomButton 
                    title="Winter"
                    onPress={() => this.props.navigation.navigate('Winter')}
                />
                <CustomButton 
                    title="Spring"
                    onPress={() => this.props.navigation.navigate('Spring')}
                />
                <CustomButton 
                    title="Summer"
                    onPress={() => this.props.navigation.navigate('Summer')}
                />  

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttons: {
        backgroundColor: 'black'
    },
    backgroundImage: {
        width: 400,
        height: 800
    }
  });