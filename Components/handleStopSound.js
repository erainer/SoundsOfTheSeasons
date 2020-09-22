import soundObject from './soundObject';

export default async function handlePlaySound() {
    await soundObject.unloadAsync()
}