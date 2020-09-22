import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import handlePlaySound from './handlePlaySound';
import handleStopSound from './handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#76960F';

export default class SummerScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/summer-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Fourth of July"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Fourth of July')}
                />
                <CustomButton 
                    title="Nature and Events"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Summer Nature Events')}
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