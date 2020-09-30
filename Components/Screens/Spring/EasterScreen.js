import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../../CustomButton';
import handlePlaySound from '../../handlePlaySound';
import handleStopSound from '../../handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#338DCC';

export default class EasterScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../../../assets/backgrounds/easter-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Peter Cottontail"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('peterCottontail')}
                />

                <CustomButton 
                    title="Amazing Grace"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('amazingGraceBagpipes')}
                />

                    <CustomButton 
                    title="Rooster"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('rooster')}
                />

                <CustomButton 
                    title="Baby Chicks"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('babyChicks')}
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