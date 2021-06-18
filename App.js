import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/Game.js';
import Menu from './src/Menu.js';

export default function App() {
    const [gameStarted, setGameStarted] = useState(false)
    const [firstMove, setFirstMove] = useState(true)
    const [M, setM] = useState(0)
    const [N, setN] = useState(0)

    const startGame = (fm, m, n)=>{
        setGameStarted(() => true)
        setFirstMove(() => fm)
        setM(() => m)
        setN(() => n)
    }

    return (
        <View style={styles.container}>
            {
                gameStarted?
                    <Game amount={N}></Game>:
                    <Menu onStart={startGame}/>
            }

            <View>
                <Text>{firstMove}, {M}, {2*N+1}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
