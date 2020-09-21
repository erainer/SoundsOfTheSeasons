import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import CustomButton from './CustomButton';
import {Audio} from 'expo-av';

const halloweenSounds = {
    howl: require('../assets/sounds/howl.mp3'),
    ghost: require('../assets/sounds/ghost.mp3'),
    creepyVoice: require('../assets/sounds/creepy-voice.wav'),
    childWhisper: require('../assets/sounds/child-whisper.wav'),
    childLaugh: require('../assets/sounds/child-laugh.wav')
}
const buttonBackgroundColor = 'black';
const textAndBorderColor = '#ff7500';

async function handlePlaySound(sound) {
    const soundObject = new Audio.Sound()
    try {
        let source = halloweenSounds[sound]
        await soundObject.unloadAsync()
        await soundObject.loadAsync(source)
        await soundObject
            .playAsync()
            .then(async playbackStatus => {
                setTimeout(() => {
                    soundObject.unloadAsync()
                }, playbackStatus.playableDurationMillis)
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
        console.log(error)
    }
}

export default class HalloweenScreen extends Component {
    render() {
        return (
            
            <ImageBackground 
                source={require('../assets/backgrounds/halloween-background.jpg')}
                style={{width: '100%', height: '100%'}} >

                <CustomButton 
                    title="Wolf Howl"
                    backgroundColor={buttonBackgroundColor}
                    textAndBorderColor={textAndBorderColor}
                    onPress={() => handlePlaySound('howl')}
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

