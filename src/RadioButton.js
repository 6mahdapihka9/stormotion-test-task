import React from "react"
import {StyleSheet, View} from "react-native";

const RadioButton = ({name, onChange, firstSelected})=>{

    const pressRadio = ()=>{
        onChange(name)
    }

    return (
        <View style={styles.outer} onPress={pressRadio} key={name}>
            {
                name === 'first' && firstSelected?
                    <View  style={styles.inner}/>
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    outer: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    inner: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    }
});

export default RadioButton;
