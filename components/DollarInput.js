import React, { useState, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity  } from 'react-native';
import styles from '../styles';

export default function DollarInput(props) {
    const [dollars, setDollars] = useState(0);
    const hiddenInputRef = useRef();

    const formattedDollars = dollars && !isNaN(dollars)
        ? (
            <>
                <Text style={{color:'#c0c0c0'}}>$</Text>{
                 dollars
                }<Text style={{color:'#c0c0c0'}}>.00</Text>
            </>
          )
        : (<Text style={{color:'#c0c0c0'}}>$</Text>);

    return (
        <View>
            <TouchableOpacity
                    style={styles.input}
                    onPress={() => hiddenInputRef.current.focus()}>
                <TextInput
                    style={{display: 'none'}}
                    value={String(dollars)}
                    keyboardType="numeric"
                    ref={hiddenInputRef}
                    onChangeText={updateDollars}
                    maxWidth={5}
                />
                <Text style={styles.bigText}>{formattedDollars}</Text>
            </TouchableOpacity>
        </View>
    );

    function updateDollars(text) {
        let d = parseInt(text.replace(/[^0-9]/g), 10);
        setDollars(isNaN(d) ? 0 : d);
    }
}
