import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title({props}) {
    return(
        <View style={styles.header}>
            <Text style={styles.Title}>
                {props}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        padding: 15
    },
    title: {
        textAlign: 'center',
        color: 'white'
    }
})