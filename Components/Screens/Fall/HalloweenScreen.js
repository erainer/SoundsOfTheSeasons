import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import CustomButton from '../../CustomButton'
import handlePlaySound from '../../handlePlaySound'
import handleStopSound from '../../handleStopSound'
const buttonBackgroundColor = 'black';
const textAndBorderColor = '#ff7500';

export default class HalloweenScreen extends Component {

    componentWillUnmount() {
        handleStopSound()
    }

    render() {
        return (
            
            <ImageBackground 
                source={require('../../../assets/backgrounds/halloween-background.jpg')}
                style={{width: '100%', height: '100%'}} >

                <CustomButton 
                    title="Wolf Howl"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('howl') }
                />
                <CustomButton title="Ghost"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('ghost')}
                />
                <CustomButton 
                    title="Creepy Voice"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('creepyVoice')}
                />
                <CustomButton 
                    title="Child Whisper"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('childWhisper')}
                />
                <CustomButton 
                    title="Child Laugh"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('childLaugh')}
                />

            </ImageBackground>
        );
    }
}

