import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default class SpringScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/spring-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Easter"
                />
                <CustomButton 
                    title="St. Patrick's Day"
                />
                <CustomButton 
                    title="Nature"
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