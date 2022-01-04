import React from 'react';
import { TextInput } from 'react-native';

export default function DollarInput(props) {
    return (
        <TextInput {...{...props, style: {fontSize:40}}} />
    );
}
