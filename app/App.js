import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListsOverviewScreen from './screens/ListsOverviewScreen';
import {NavigationContainer} from '@react-navigation/native';
import BirdListScreen from './screens/BirdListScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All Lists" component={ListsOverviewScreen} />
        <Stack.Screen name="Bird List" component={BirdListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
