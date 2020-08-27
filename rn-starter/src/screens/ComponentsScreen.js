import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    name = "Mathe";
    return (
        <View>
    <Text style={styles.text1}>Getting Started with React Native!</Text>
    <Text style={styles.text}>My Name is {name}</Text>
    </View>
    );
  };

const styles = StyleSheet.create({
    text1: {
      fontSize: 45
    },
    text2: {
        fontSize: 20
      }

  });
  
  export default ComponentScreen;