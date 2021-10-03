import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CounterButton from './CounterButton';
import { Ionicons } from '@expo/vector-icons';

const MainPage = props => {

    const [qCounter, qSetCounter] = useState(1);
    const [sCounter, sSetCounter] = useState(0);
    const [sizeOutput, setSizeOutput] = useState('XS');

    const qSetCounterHandler = x => {

        if (x === 'remove') {
            if (qCounter == 1) {
                return;
            }

            qSetCounter(qCounter - 1);
        } else {
            if (qCounter == 5) {
                return;
            }

            qSetCounter(qCounter + 1);
        }
    }

    const sSetCounterHandler = x => {

        if (x === 'remove') {
            if (sCounter === 0) {
                return;
            }

            if (sCounter - 1 === 0) {
                setSizeOutput('XS');
            } else if (sCounter - 1 === 1) {
                setSizeOutput('S');
            } else if (sCounter - 1 === 2) {
                setSizeOutput('L');
            } else if (sCounter - 1 === 3) {
                setSizeOutput('XL');
            }

            sSetCounter(sCounter - 1);
        } else {
            if (sCounter === 3) {
                return;
            }

            if (sCounter + 1 === 0) {
                setSizeOutput('XS');
            } else if (sCounter + 1 === 1) {
                setSizeOutput('S');
            } else if (sCounter + 1 === 2) {
                setSizeOutput('L');
            } else if (sCounter + 1 === 3) {
                setSizeOutput('XL');
            }

            sSetCounter(sCounter + 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={require("../assets/mango.jpg")}
                    style={styles.img}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.t1}>Mango men's jacket</Text>
                <Text style={styles.t2}>35<Text style={styles.dollar}> $</Text></Text>
            </View>

            <View style={styles.line} />

            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>Quantity</Text>
                <View style={styles.counterContainer}>
                    <View style={styles.buttonPlus}>
                        <CounterButton onPress={qSetCounterHandler.bind(this, 'add')}><Ionicons name="md-add" size={24} color="white" /></CounterButton>
                    </View>

                    <Text style={styles.countText}>{qCounter}</Text>

                    <View style={styles.buttonMinus}>
                        <CounterButton onPress={qSetCounterHandler.bind(this, 'remove')}><Ionicons name="md-remove" size={24} color="white" /></CounterButton>
                    </View>

                </View>
            </View>

            <View style={styles.sizeContainer}>
                <Text style={styles.sizeText}>Size</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.buttonPlus}>
                        <CounterButton onPress={sSetCounterHandler.bind(this, 'add')}><Ionicons name="md-add" size={24} color="white" /></CounterButton>
                    </View>

                    <Text style={styles.countText}>{sizeOutput}</Text>

                    <View style={styles.buttonMinus}>
                        <CounterButton onPress={sSetCounterHandler.bind(this, 'remove')}><Ionicons name="md-remove" size={24} color="white" /></CounterButton>
                    </View>

                </View>
            </View>

            <View style={styles.confirmButtonContainer}>
                <CounterButton onPress={() => props.onStartPage(2, qCounter, sizeOutput, qCounter)}>Add to Cart</CounterButton>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#bccfc1',
        width: "100%",
        height: "100%",

    },
    imgContainer: {
        width: "100%",
        height: "75%",
        alignItems: 'center',
        marginTop: "10%"
    },
    img: {
        width: "77%",
        height: "75%",
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: 'white',
        borderWidth: 1
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: "12%",
        marginTop: "-30%"

    },
    t1: {
        fontSize: 22,
        color: '#3d2c32'
    },
    t2: {
        marginLeft: "15%",
        fontSize: 24,
        color: '#404b45'
    },
    dollar: {
        color: '#065712',
        fontSize: 25,

    },
    quantityContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: "12%",
        marginTop: "5%",
    },
    quantityText: {
        fontSize: 22,
        color: '#3d2c32'
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: "12%",
    },
    buttonPlus: {
        width: 40,
        height: 40,
        marginLeft: "30%",
        marginTop: "1.5%",
    },
    buttonMinus: {
        width: 40,
        height: 40,
        marginTop: "1.5%"
    },
    countText: {
        fontSize: 18,
        marginTop: "4%",
        marginHorizontal: "6%",
        color: '#404b45',
        marginHorizontal: "5%"
    },
    line: {
        borderColor: '#281920',
        borderWidth: 0.8,
        marginHorizontal: "8%"
    },
    sizeContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: "12%",
    },
    sizeText: {
        fontSize: 22,
        color: '#3d2c32'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: "24%",
    },
    input: {
        width: 50
    },
    confirmButtonContainer: {
        width: "60%",
        marginLeft: "20%",
        marginBottom: "8%",
    }
});

export default MainPage;