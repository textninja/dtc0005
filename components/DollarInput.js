import React, { useState, useRef } from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback  } from 'react-native';
import styles from '../styles';

export default function DollarInput(props) {
    const [isFocused, setFocused] = useState(false);
    const [textValue, setValue] = useState("");
    const inputRef = useRef();

    return (
        <View>
            <TouchableWithoutFeedback
                    onPress={() => isFocused || inputRef.current.focus()}>
                <View
                        style={
                            {...styles.input, flexDirection: "row"}
                        }>
                    <Text style={styles.bigText}>$</Text>
                    <TextInput
                        style={styles.bigText}
                        value={textValue}
                        keyboardType="numeric"
                        ref={inputRef}
                        onChangeText={updateAmt}
                        maxLength={5}
                        onPress={e => e.stopPropagation()}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    />
                    { textValue ? <Text style={styles.bigText}>.00</Text> : null }
                </View>
            </TouchableWithoutFeedback>
        </View>
    );

    function updateAmt(text) {
        setValue(text.toString().replace(/[^0-9]/g, "").replace(/^0+/, ""));
    }
}
