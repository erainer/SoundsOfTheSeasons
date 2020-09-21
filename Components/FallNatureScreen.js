import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';

export default class FallNatureScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/fall-weather-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                
                <CustomButton 
                    title="Rain"
                />
                <CustomButton 
                    title="Thunder"
                />
                <CustomButton 
                    title="Leafs Crunching"
                />
                <CustomButton 
                    title="Candian Geese"
                />
                <CustomButton 
                    title="Bon Fire"
                />
                <CustomButton 
                    title="Farmers Harvesting"
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