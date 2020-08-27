import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";


const ColorScreen = () => {
    const [colors, setColorArr] = useState([]);
    return (
        <View>
        <Button 
            title="add the color"
            onPress = {() => setColorArr(colors.concat(randColor()))}
        />
        <FlatList 
            data = {colors}
            renderItem = { ({item}) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }}
            keyExtractor = {item => item}
        />
    </View>
    );
  };

  const randColor = () => {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
  }

const styles = StyleSheet.create({
    
  });
  
  export default ColorScreen;