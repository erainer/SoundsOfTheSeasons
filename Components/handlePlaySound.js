import soundObject from './soundObject';

const soundLibrary = {
    // Halloween
    howl: require('../assets/sounds/howl.mp3'),
    ghost: require('../assets/sounds/ghost.mp3'),
    creepyVoice: require('../assets/sounds/creepy-voice.wav'),
    childWhisper: require('../assets/sounds/child-whisper.wav'),
    childLaugh: require('../assets/sounds/child-laugh.wav'),

    // Fall Nature
    rain: require('../assets/sounds/rain.mp3'),
    rainWithThunder: require('../assets/sounds/rain-with-thunder.wav'),
    rustlingLeaves: require('../assets/sounds/rustling-leaves.wav'),
    canadianGeese: require('../assets/sounds/canadian-geese.wav'),
    fire: require('../assets/sounds/fire.wav'),

    // Thanksgiving
    turkeyGobble: require('../assets/sounds/turkey-gobble.wav'),
    charlieBrown: require('../assets/sounds/charlie-brown-thanksgiving.mp3'),

    // Easter
    babyChicks: require('../assets/sounds/baby-chicks.wav'),

    // Spring Nature
    springBirdsChirping: require('../assets/sounds/spring-birds-chirping.wav'),
    quial: require('../assets/sounds/quial.wav'),
    cicada: require('../assets/sounds/cicada.wav'),
    peeperFrogs: require('../assets/sounds/peeper-frogs.wav'),
    frogs: require('../assets/sounds/frogs.wav'),
    stream: require('../assets/sounds/stream.wav'),

    // New Years
    fireCrackersPop: require('../assets/sounds/fire-crackers-pop.wav'),

    // Christmas
    sleighBells: require('../assets/sounds/sleigh-bells.wav'),

    // Summer Nature and Events
    dolphins: require('../assets/sounds/dolphins.wav'),
    seagulls: require('../assets/sounds/seagulls.wav'),
    iceCreamTruck: require('../assets/sounds/ice-cream-truck.wav'),
    summerNight: require('../assets/sounds/summer-night-time.wav'),
    seaWaves: require('../assets/sounds/sea-waves.wav'),
    summerDay: require('../assets/sounds/summer-day.wav'),

    // Fourth of July
    fireworksFinale: require('../assets/sounds/fireworks-finale.wav'),
    fireworks: require('../assets/sounds/fireworks.wav'),

    wind: require('../assets/sounds/wind.wav'),
    rooster: require('../assets/sounds/rooster.wav'),
}

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