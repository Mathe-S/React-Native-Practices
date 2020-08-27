import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import ImageDetails from "../Components/ImageDetails"


const ImageScreen = () => {
  
  return ( <View>
    <ImageDetails 
        title= "Forest"
        imageSource = {require("../../assets/forest.jpg")}
        score = {9}
    />
    <ImageDetails 
        title= "Beach"
        imageSource = {require("../../assets/beach.jpg")}
        score = {7}
    />
    <ImageDetails 
        title= "Mountain"
        imageSource = {require("../../assets/mountain.jpg")}
        score = {10}
    />
  </View>
  )
};


export default ImageScreen;
