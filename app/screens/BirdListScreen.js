import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import BirdListItem from '../components/BirdListItem';

function BirdListScreen({navigation, route}) {
  const [birds] = useState([
    {
      id: uuid.v4(),
      species: 'Roodborstje',
    },
    {
      id: uuid.v4(),
      species: 'Merel',
    },
    {
      id: uuid.v4(),
      species: 'Koolmees',
    },
    {
      id: uuid.v4(),
      species: 'Groene specht',
    },
  ]);

  const onPressBirdItem = item => {
    console.log('onPressBirdItem', item);
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Add"
          color="#fff"
        />
      ),
      headerBackTitle: '',
      title: route.params.item.location,
    });
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <FlatList
        data={birds}
        renderItem={({item}) => (
          <BirdListItem bird={item} onBirdPressed={onPressBirdItem} />
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
  label: {
    fontSize: 40,
    color: 'red',
  },
});

export default BirdListScreen;
