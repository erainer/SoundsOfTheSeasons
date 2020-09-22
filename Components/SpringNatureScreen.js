import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import handlePlaySound from './handlePlaySound';
import handleStopSound from './handleStopSound';

const buttonBackgroundColor = 'black';
const textAndBorderColor = '#FFE57E';

export default class SpringNatureScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/spring-nature-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                
                <CustomButton 
                    title="Birds Chirping"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('springBirdsChirping')}
                />
                <CustomButton 
                    title="Stream Running"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('stream')}
                />
                <CustomButton 
                    title="Cicada"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('cicada')}
                />
                <CustomButton 
                    title="Spring Peepers"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('peeperFrogs')}
                />
                <CustomButton 
                    title="Frogs"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('frogs')}
                />
                <CustomButton 
                    title="Quials"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('quial')}
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