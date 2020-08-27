import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";


const TextScreen = () => {
  
  return ( <View style={styles.parentView} >
    <View style={styles.boxOne}></View>
    <View style={styles.boxtWo} ></View>
    <View style={styles.boxThree} ></View>
  </View>
  )
};

const styles = StyleSheet.create({
    parentView: {
        borderColor: 'black',
        borderWidth: 3,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxOne: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        
    },
    boxtWo: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: "flex-end"
    },
    boxThree: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
});

export default TextScreen;
