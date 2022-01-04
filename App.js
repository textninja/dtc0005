import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import DollarInput from './components/DollarInput';

const textStyle = {
  fontSize: 32
};

export default function App() {

  let [unfocus, setUnfocus] = useState(1);

  const [val, setVal] = useState("");

  const textInput = useRef();

  let children = [
    <Text key="dollar" style={textStyle}>$</Text>,
    <TextInput
      key="input"
      style={textStyle}
      ref={textInput}
      defaultValue=""
      maxLength={5}
      keyboardType="numeric"
    />,
    <Text key="dot-zero-zero" style={textStyle}>.00</Text>
  ];

  return <View style={{padding: 50, height: "100%" }}>
    <TouchableOpacity
      style={{
        borderWidth: 2,
        minWidth: 100,
        borderColor: "black",
        display: "flex",
        flexDirection: "row",
        padding: 5,
      }}
      onPress={() => textInput.current.focus()}
    >
      {children}
    </TouchableOpacity>
  </View>

  // return (
  //   <View style={{ padding: 50, height: "100%" }} onTouchStart={(e) => setUnfocus(f => f+1)}>
  //     <DollarInput
  //       unfocus={unfocus}
  //       defaultValue="Hello"/>
  //   </View>
  // );
}
