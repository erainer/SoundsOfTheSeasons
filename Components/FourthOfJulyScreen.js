import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import CustomButton from './CustomButton'
import handlePlaySound from './handlePlaySound'
import handleStopSound from './handleStopSound'

const buttonBackgroundColor = '#1A293E';
const textAndBorderColor = 'white';

export default class FourthOfJulyScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/fourth-of-july-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Fireworks"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('fireworks')}
                />
                <CustomButton 
                    title="Fireworks Finale"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('fireworksFinale')}
                />
                
            </ImageBackground>
        );
    }
}