import React ,{ useCallback } from 'react';
import {useFonts} from 'expo-font';
import * as SplachScreen from 'expo-splash-screen';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import MainNavigator from './Navigation/MealsNavigation';
import mealsReducer from './store/reducers/meals';



const rootReducer = combineReducers({
  meals : mealsReducer,
})
const store = createStore(rootReducer);



export default function App() {

  SplachScreen.preventAutoHideAsync();
  const [fontLoaded] = useFonts(
    {
      'regularFont' : require('./assets/Fonts/OpenSans-Regular.ttf'),
    'boldFont' : require('./assets/Fonts/OpenSans-Bold.ttf')
    }
  )

  const onLayoutRootView = useCallback(async () =>{
    if (fontLoaded) {
      await SplachScreen.hideAsync();
    }
  }, [fontLoaded])

 
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    
  );
}


