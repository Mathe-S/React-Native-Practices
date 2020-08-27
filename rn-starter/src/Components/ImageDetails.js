import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import afwe from "../../assets/forest.jpg";


const ImageDetails = ({imageSource, title, score}) => {
  console.log(imageSource);
  return ( <View>
    <Image source= {imageSource} />
    <Text>{title}</Text>
    <Text>Image Score - {score}</Text>
  </View>
  )
};

export default ImageDetails;
