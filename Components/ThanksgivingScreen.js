import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default class HalloweenScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/thanksgiving-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                <CustomButton 
                    title="Turkey Gobble"
                />
                <CustomButton 
                    title="Oven Ding"
                />
                <CustomButton 
                    title=""
                />
                <CustomButton 
                    title=""
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