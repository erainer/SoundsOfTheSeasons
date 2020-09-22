import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import handlePlaySound from './handlePlaySound';
import handleStopSound from './handleStopSound';

const buttonBackgroundColor = 'black';
const textAndBorderColor = '#5FA755';

export default class StPatricksDayScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/st-patricks-day-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="hello"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
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