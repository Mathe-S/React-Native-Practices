import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = () => {
    const COLOR_INCREMENT = 15;

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

  
  return ( <View>
   <ColorCounter 
   onIncrease={() => red!==255 && setRed(red+COLOR_INCREMENT)} 
   onDecrease={() => red!==0 && setRed(red-COLOR_INCREMENT)} 
   color = 'Red' colorValue = {red} />
   <ColorCounter 
   onIncrease={() => green!==255 && setGreen(green+COLOR_INCREMENT)} 
   onDecrease={() => green!==0 && setGreen(green-COLOR_INCREMENT)}  
   colorValue = {green} color = 'Green' />
   <ColorCounter 
   onIncrease={() => blue!==255 && setBlue(blue+COLOR_INCREMENT)} 
   onDecrease={() => blue!==0 && setBlue(blue-COLOR_INCREMENT)}  
   colorValue = {blue} color = 'Blue' />
   <View 
       style = {{ height: 150, width: 150, backgroundColor: `rgb(${red},${green}, ${blue})` }}
   />
  </View>
  )
};


export default SquareScreen;
