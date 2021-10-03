import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CounterButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        // backgroundColor: '#ee5113',
        paddingVertical: 4,
        // paddingHorizontal: 2,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontSize: 22
    }
});

export default CounterButton;