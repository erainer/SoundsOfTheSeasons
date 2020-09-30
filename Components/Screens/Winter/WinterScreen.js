import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../../CustomButton';
import handlePlaySound from '../../handlePlaySound';
import handleStopSound from '../../handleStopSound';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#4E90C0';

export default class WinterScreen extends Component {
    render() {
        return (
            <ImageBackground 
                source={require('../../../assets/backgrounds/winter-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Christmas"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Christmas')}
                />
                <CustomButton 
                    title="New Years"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('New Years')}
                />
                <CustomButton 
                    title="Nature"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Winter Nature')}
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