import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import CustomButton from './CustomButton'
import handlePlaySound from './handlePlaySound'
import handleStopSound from './handleStopSound'


const buttonBackgroundColor = 'white';
const textAndBorderColor = '#fe9c34';

export default class ThanksgivingScree extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/thanksgiving-background.jpg')}
                style={styles.background} >
                <CustomButton 
                    title="Turkey Gobble"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('turkeyGobble')}
                />
                <CustomButton 
                    title="Charlie Brown"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('charlieBrown')}
                />

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
  });