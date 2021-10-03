import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import MainButton from './MainButton';
const StartPage = props => {

    return (
        <View style={styles.bg}>
            <View style={styles.bgContainer}>
                <Image
                    source={{ uri: 'https://i.redd.it/nx2iz5e7rdt51.png' }}
                    style={styles.bgImg}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.imgContainer}>
                <Image
                    source={require("../assets/welcome.png")}
                    style={styles.userImg}
                />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton onPress={() => props.onStartPage(1,0,'null',0)}>Get started</MainButton>
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    bgContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    bgImg: {
        width: "100%",
        height: "100%",
        // flex: 1,
        // flexDirection: "column"
    },
    imgContainer: {
        alignContent: 'center',
    },
    userImg: {
        // borderRadius: 150,
        width: 380,
        height: 100,
        overflow: 'hidden',
        marginVertical: "40%",
        alignContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        flex: 2,
        width: "60%",
        height: "10%",
        justifyContent: 'flex-end',
        marginBottom: "10%"
        
    },
});

export default StartPage;