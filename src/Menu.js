import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from "react-native-web";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Menu = ({ onStart })=>{
    const setVariables = () => {
        onStart(firstMove, M, N)
    }

    const [firstMove, setFirstMove] = useState(true);
    const [M, setM] = useState(true);
    const [N, setN] = useState(true);

    return (
        <View style={styles.menu}>
            <View style={styles.radioBlock}>
                <Text style={styles.w50}>Pick first move</Text>
                <BouncyCheckbox style={styles.w50}
                    disableText={true}
                    fillColor="black"
                    onPress={(fm)=>setFirstMove(!fm)}
                    isChecked={true}/>
            </View>
            <View style={styles.input}>
                <Text style={styles.text}>Enter m</Text>
                <TextInput onChandeText={val => setM(isNaN(+val)?3:val)} style={styles.textField}/>
            </View>

            <View style={styles.input}>
                <Text style={styles.text}>Enter n in 2n+1</Text>
                <TextInput onChandeText={val => setN(isNaN(+val)?12:val)} style={styles.textField}/>
            </View>

            <Button style={styles.button}
                    title='Start game'
                    onPress={setVariables}/>
        </View>
    );
}


const styles = StyleSheet.create({
    menu: {
        padding: 15,
        backgroundColor: 'lightblue',
        borderRadius: 10,
    },
    input: {
        margin: 15,
        flexDirection: 'row',
    },
    text: {
        width: '50%'
    },
    textField: {
        width: '50%',
        backgroundColor: 'white',
    },
    radioBlock: {
        padding: 15,
        flexDirection: 'row',
    },
    radio: {
        width: '50%',
        flexDirection: 'row',
        // justifyContent: 'space-evenly'
    },
    button: {

    },
    w50:{
        width: '50%'
    }
});

export default Menu;
