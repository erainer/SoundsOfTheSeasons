import soundObject from './soundObject'
import soundLibrary from './soundLibrary'

export default async function handlePlaySound(sound) {
    await soundObject.unloadAsync()
    try {
        let source = soundLibrary[sound]
        await soundObject.loadAsync(source)
        await soundObject
            .playAsync()
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
        console.log(error)
    }
}