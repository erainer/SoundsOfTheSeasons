import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import handlePlaySound from './handlePlaySound';
import handleStopSound from './handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#923069';

export default class SpringScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../assets/backgrounds/spring-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Easter"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Easter')}
                />
                <CustomButton 
                    title="St. Patrick's Day"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('St. Patricks Day')}
                />
                <CustomButton 
                    title="Nature"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Spring Nature')}
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