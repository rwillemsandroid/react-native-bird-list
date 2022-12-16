import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, useColorScheme, View} from 'react-native';
import uuid from 'react-native-uuid';
import WalkListItem from '../components/WalkListItem';

function WalkListsScreen({navigation}) {
  const [walks, setWalks] = useState([
    {
      id: uuid.v4(),
      date: '2021-01-01',
      location: 'Eksterheide',
    },
    {
      id: uuid.v4(),
      date: '2021-01-02',
      location: 'Groothoutebos',
    },
    {
      id: uuid.v4(),
      date: '2021-01-03',
      location: 'Liereman',
    },
    {
      id: uuid.v4(),
      date: '2021-01-04',
      location: 'Epelaar',
    },
  ]);

  const onPressWalkItem = item => {
    navigation.navigate('Bird List', {item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={walks}
        renderItem={({item}) => (
          <WalkListItem walk={item} onWalkPressed={onPressWalkItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
  },
});

export default WalkListsScreen;
