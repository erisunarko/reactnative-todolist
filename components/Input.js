import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({placeholder, onSubmitEditing}) {
    const [text, setText] = useState('');

    const onChangeText = text => {
        setText(text);
    }

    const handleOnSubmitEditing = () => {
        if(!text.trim()) {
            setText('');
            return;
        } 
        onSubmitEditing(text);
        setText('');
    }

    return(
        <TextInput 
            style={styles.input} 
            value={text}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onSubmitEditing={handleOnSubmitEditing}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50
    }
})