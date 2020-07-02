import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function List({list, onPressItem}) {
    const renderItem = (text, i) => {
        return(
            <TouchableOpacity style={styles.item} key={i} onPress={() => onPressItem(i)}>
                <Text>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }

    return(
        <View>
            {list.map(renderItem)}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'whitesmoke',
        marginBottom: 5,
        padding: 15
    }
})