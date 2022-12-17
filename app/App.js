import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkListsScreen from './screens/WalkListsScreen';
import {NavigationContainer} from '@react-navigation/native';
import BirdListScreen from './screens/BirdListScreen';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#004909',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Walks"
          component={WalkListsScreen}
          options={{title: 'My walks'}}
        />
        <Stack.Screen name="Bird List">
          {props => <BirdListScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
