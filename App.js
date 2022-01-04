import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DollarInput from './components/DollarInput';

export default function App() {

  let [unfocus, setUnfocus] = useState(1);

  return (
    <View style={{ padding: 50, height: "100%" }} onTouchStart={(e) => setUnfocus(f => f+1)}>
      <DollarInput
        unfocus={unfocus}
        defaultValue="Hello"/>
    </View>
  );
}
