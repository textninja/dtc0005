import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import styles from '../styles';

function moneyFormat(input) {
    let amt = parseInt(input.replace(/[^0-9.]/g, ""), 10);
    if (isNaN(amt)) amt = 0;
    return "$" + amt.toFixed(2);
}

export default function DollarInput(props) {
    const [val, setVal] = useState("0");
    const shownValue = moneyFormat(val);

    return (
        <TextInput
            style={styles.bigText}
            {...{...props, value: shownValue}}
            onChangeText={t => setVal(t)}
        />
    );
}
