import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from "./Player";
import StackOffMatches from "./stackOffMatches";


const Game = (prop)=>{

    return (
        <View style={styles.playerViews}>
            <Player name='user'></Player>
            <StackOffMatches amount={prop.amount}></StackOffMatches>
            <Player name='robot'></Player>
        </View>
    );
}

const styles = StyleSheet.create({
    playerViews: {
        flex: 1,
        flexDirection: 'row',
    },
});

export default Game;
