import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Player = (prop)=>{
    if (prop.name==='user')
        return (
            <View>
                <Text style={styles.playerIcon}>😎</Text>
            </View>
        );
    else
        return (
            <View>
                <Text style={styles.playerIcon}>🤖</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    playerIcon: {
        fontSize: 100,
    },
});

export default Player;
