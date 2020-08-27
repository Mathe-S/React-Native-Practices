import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumScreen from './src/screens/AlbumScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Albums' component={AlbumScreen} options={{headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default App;