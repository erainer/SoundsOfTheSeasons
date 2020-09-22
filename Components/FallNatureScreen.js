import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import handlePlaySound from './handlePlaySound';
import handleStopSound from './handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#7e817f';

export default class FallNatureScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/fall-weather-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                
                <CustomButton 
                    title="Rain"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('rain')}
                />
                <CustomButton 
                    title="Rain with Thunder"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('rainWithThunder')}
                />
                <CustomButton 
                    title="Rustling Leaves"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('rustlingLeaves')}
                />
                <CustomButton 
                    title="Canadian Geese"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('canadianGeese')}
                />
                <CustomButton 
                    title="Bon Fire"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('fire')}
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