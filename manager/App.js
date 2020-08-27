import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import IndexScreen from './src/screens/IndexScreen';
import { navigationRef } from './src/RootNavigation';

const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <IndexScreen />
    </NavigationContainer>
    </Provider>
  )
}




export default App;