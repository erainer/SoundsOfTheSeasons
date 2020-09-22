import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import handlePlaySound from './handlePlaySound';
import handleStopSound from './handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#846759';

export default class WinterNatureScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/winter-nature-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="hello"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                />
                <CustomButton 
                    title=""
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                />
                <CustomButton 
                    title=""
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