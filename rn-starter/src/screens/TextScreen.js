import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const TextScreen = () => {
    const [name, setName] = useState("");
  
  return ( <View>
    <Text>Enter Name:</Text>
    <TextInput 
    style={styles.input} 
    autoCapitalize = "none"
    autoCorrect = {false}
    value = {name}
    onChangeText = { newName => setName(newName)}
    />
    <Text>Your Name is {name}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

});

export default TextScreen;
