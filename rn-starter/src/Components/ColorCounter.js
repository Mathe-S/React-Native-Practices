import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";


const SquareScreen = ({color, colorValue, onIncrease, onDecrease}) => {
  
  return ( <View>
   <Text>{color} : {colorValue}</Text>
   <Button title={`increase ${color}`} onPress={() => onIncrease()} />
   <Button title={`decrease ${color}`} onPress={() => onDecrease()}  />
  </View>
  )
};


export default SquareScreen;