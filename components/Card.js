import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import BackButton from './BackButton';

const Card = props => {
    return (
        <View style={styles.first}>
            <Text style={styles.line}>You choose <Text style={styles.model}>{props.qCounter}</Text> Mango men's jacket</Text>
            <Text style={styles.line}>All of them are in size <Text style={styles.model}>{props.sizeOutput}</Text></Text>
            <Text style={styles.line}>They costs <Text style={styles.model}> {props.value}</Text> <Text style={styles.dollar}>$</Text></Text>
            <Text style={styles.greet}>Thank's for your buying</Text>
            <BackButton onPress={props.onRestart}>Back</BackButton>
        </View>
    );
};

const styles = StyleSheet.create({
    first: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    line: {
        fontSize: 20
    },
    model: {
        color: "#fc6203",
        fontSize: 24
    },
    dollar: {
        color: '#065712',
        fontSize: 27,
    },
    greet: {
        fontSize: 25,
        marginTop: 70
    }


});

export default Card;