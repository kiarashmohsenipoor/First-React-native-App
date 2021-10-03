import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './components/StartPage';
import MainPage from './components/MainPage';
import Card from './components/Card';

export default function App() {
  const [showIntro, setIntro] = useState(0);
  const [qCounter, setCounter] = useState(0);
  const [size, setSize] = useState(0);
  const [value, setValue] = useState(0);

  const pageHandler = (condition,quantity,size,value) => {
    setIntro(condition);
    if (condition === 2) {
      setCounter(quantity);
      setSize(size);
      setValue(value);
    }
  };

  const configureNewGameHandler = () => {
    setIntro(1);
  };

  let content = <StartPage onStartPage={pageHandler}/>

  if (showIntro === 0) {
    content = <StartPage onStartPage={pageHandler}></StartPage>
  } else if (showIntro === 1) {
    content = <MainPage onStartPage={pageHandler}></MainPage>
  } else if (showIntro === 2) {
    content = <Card qCounter={qCounter} sizeOutput={size} value={value * 35} onRestart={configureNewGameHandler}></Card>
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
