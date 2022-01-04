import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

const textStyle = {
    fontSize: 40
};

const centsStyle = {
    ...textStyle,
    color: "#c0c0c0"
}

const inputStyle = {
    display: "none"
};

const viewStyle = {
    backgroundColor: "#ff0000",
    width: 200,
    position: "relative",
    display: "block"
}

function dollarize(text) {
    let nums = (text.match(/[0-9]/g) || []).join("");
    nums.padStart(3, "0");
    return "$"+nums;
}

export default function DollarInput(props) {
    const [text, setText] = useState("43");

    const inputRef = useRef();

    function setDollars(t) {
        setText(t);
    }

    function formatted(text) {
        return "$" + text;
    }

    const showCents = text ? true : false;

    return (
        <View style={{viewStyle}}>

            <TextInput
                keyboardType="numeric"
                ref={inputRef}
                value={text}
                style={inputStyle}
                onChangeText={t => {
                    setDollars(t)
                }}
            />

            <TouchableWithoutFeedback
                onPress={() => inputRef.current.focus()}
            >
                <Text><Text style={textStyle}>{formatted(text)}</Text>{showCents ? <Text style={centsStyle}>.00</Text> : null }</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}
