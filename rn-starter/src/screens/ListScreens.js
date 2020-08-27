import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [];
  for (let i=0; i<10 ; i++){
      friends.push({ name: `Friend ${i+1}`, age: 20+i})
  }
//   console.log(friends);
  return ( <View>
   <FlatList 
       
       showsHorizontalScrollIndicator= {false}
       keyExtractor = {frined => frined.name}
       data= {friends}
        renderItem = { ({item}) =>{
            return (
                <Text style= {styles.text}>
                    {item.name} - Age: {item.age}
                </Text>
            )
        }
        
        }
   />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ListScreen;
