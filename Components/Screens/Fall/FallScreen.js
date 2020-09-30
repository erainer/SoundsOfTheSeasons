import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../../CustomButton';

const buttonBackgroundColor = 'white';
const textAndBorderColor = '#997766';

export default class FallScreen extends Component {
    render() {
        return (
            
            <ImageBackground 
                source={require('../../../assets/backgrounds/fall-background.jpg')}
                style={{width: '100%', height: '100%'}} >
                
                <CustomButton 
                    title="Halloween"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Halloween')}
                />
                <CustomButton 
                    title="Thanksgiving"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Thanksgiving')}
                />
                <CustomButton 
                    title="Nature"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => this.props.navigation.navigate('Fall Nature')}
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