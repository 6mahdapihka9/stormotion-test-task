import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const StackOffMatches = (prop)=>{

    return (
        <View style={styles.stackOffMatches}>
            <Text>📍{prop.amount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    stackOffMatches: {
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },
});

export default StackOffMatches;
