import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function CustomHeader() {
    return (
        <View stlyes={styles.header}>
            <Text styles={stlyes.text}> </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    }
})