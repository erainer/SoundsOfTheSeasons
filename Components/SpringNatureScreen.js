import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';

export default class SpringNatureScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/fall-weather-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                
                <CustomButton 
                    title="Birds Chirping"
                />
                <CustomButton 
                    title="Creek Running"
                />
                <CustomButton 
                    title="Bees Buzzing"
                />
                <CustomButton 
                    title="Spring Peepers"
                />
                <CustomButton 
                    title="Cranes"
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
      justifyContent: 'center',
    },
  });