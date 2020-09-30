import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import CustomButton from '../../CustomButton'
import handlePlaySound from '../../handlePlaySound'
import handleStopSound from '../../handleStopSound'

const buttonBackgroundColor = '#1A1116';
const textAndBorderColor = '#FE7C66';

export default class SummerNatureScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            <ImageBackground 
                source={require('../../../assets/backgrounds/summer-nature-background.jpg')}
                style={{width: '100%', height: '100%'}}>

                <CustomButton 
                    title="Beach Waves"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('seaWaves')}
                />
                <CustomButton 
                    title="Seagulls"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('seagulls')}
                />
                <CustomButton 
                    title="Summer Morning"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('summerDay')}
                />
                <CustomButton 
                    title="Summer Night"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('summerNight')}
                />
                <CustomButton 
                    title="Dolphins"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('dolphins')}
                />
                <CustomButton 
                    title="Waterfall"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('waterfall')}
                />
                <CustomButton 
                    title="Ice Cream Truck"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('iceCreamTruck')}
                />

            </ImageBackground>
        );
    }
}