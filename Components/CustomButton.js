import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress, backgroundColor, textAndBorderColor }) {

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: backgroundColor, borderColor: textAndBorderColor}]}
                    onPress={onPress}>
                    <Text style={[styles.buttonText, {color: textAndBorderColor}]}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
	},
	buttonContainer: {
        height: 40,
        width: 200,
        margin: 5
	},
	button: {
		flex: 1,
		alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
	},
	buttonText: {
		fontSize: 18
	}
})

