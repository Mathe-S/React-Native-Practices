import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyARcRg_YaS5XGMN6lYCEEznuG-S1E4fPhU",
      authDomain: "manager-c0f66.firebaseapp.com",
      databaseURL: "https://manager-c0f66.firebaseio.com",
      projectId: "manager-c0f66",
      storageBucket: "manager-c0f66.appspot.com",
      messagingSenderId: "1047616529678",
      appId: "1:1047616529678:web:c6013ca90c077573bde35f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Register' component={RegisterScreen} options= {{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Login' component={LoginScreen} options= {{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}




export default App;