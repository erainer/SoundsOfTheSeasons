import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default class SummerNatureScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/spring-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Beach Waves"
                />
                <CustomButton 
                    title="Seagulls"
                />
                <CustomButton 
                    title="Crickets"
                />
                <CustomButton 
                    title="Mosquitoes"
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