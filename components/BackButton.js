import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BackButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onPress()} style={styles.touch}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: "4%",
        paddingHorizontal: "8%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#03befc',
        height: "5%",
    },
    buttonText: {
        color: 'black',
        fontSize: 22
    },
    touch: {
        marginTop: 50
    }
});

export default BackButton;