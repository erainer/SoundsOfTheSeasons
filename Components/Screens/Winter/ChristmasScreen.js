import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../../CustomButton';
import handlePlaySound from '../../handlePlaySound';
import handleStopSound from '../../handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#C00D09';

export default class ChristmasScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../../../assets/backgrounds/christmas-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Bells"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('bells')}
                />
                <CustomButton 
                    title="Ho Ho Ho"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('hoHoHo')}
                />
                <CustomButton 
                    title="Jingle Bells"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('jingleBells')}
                />
                <CustomButton 
                    title="Heat Miser"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('heatMiser')}
                />

            </ImageBackground>
        );
    }
}
