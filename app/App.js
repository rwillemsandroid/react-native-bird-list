import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkListsScreen from './screens/WalkListsScreen';
import {NavigationContainer} from '@react-navigation/native';
import BirdListScreen from './screens/BirdListScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Walks" component={WalkListsScreen} />
        <Stack.Screen
          name="Bird List"
          options={({route}) => ({title: route.params.item.location})}>
          {props => <BirdListScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
