import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';

export default class FallScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/fall-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                
                <CustomButton 
                    title="Halloween"
                    onPress={() => this.props.navigation.navigate('Halloween')}
                />
                <CustomButton 
                    title="Thanksgiving"
                    onPress={() => this.props.navigation.navigate('Thanksgiving')}
                />
                <CustomButton 
                    title="Nature"
                    onPress={() => this.props.navigation.navigate('FallNature')}
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