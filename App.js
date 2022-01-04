import React, { useState, useRef } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import DollarInput from './components/DollarInput';
import styles from './styles.js';

export default function App() {
  return (
    <View style={styles.screen}>
      <DollarInput
        defaultValue="25"
      />
    </View>
  );
}
