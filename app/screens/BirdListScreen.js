import React from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import BirdListItem from '../components/BirdListItem';
import {useSelector} from 'react-redux';

function BirdListScreen({navigation, route}) {
  const store = useSelector(state => state);

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
        data={store.birdSpot.birdsList}
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
