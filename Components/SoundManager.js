import { Audio } from 'expo-av'
import soundLibrary from './soundLibrary'
import currentSound from './currentSound'

const soundObjects = {}

class SoundManager {
  static load() {
    const promisedSoundObjects = []

    for (const name in soundLibrary) {
      const sound = soundLibrary[name]

      soundObjects[name] = new Audio.Sound()

      promisedSoundObjects.push(
        soundObjects[name].loadAsync(sound)
      )
    }

    return promisedSoundObjects
  }

  static async playSound(name) {
    try {
      if (soundObjects[name]) {
        await soundObjects[name].replayAsync()
      }
    } catch (error) {
      console.warn(error)
    }
  }

  static async stopSound(name) {
    currentSound.unloadAsync()
  }
}

export default SoundManager