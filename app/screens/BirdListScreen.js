import React, {useMemo} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import BirdListItem from '../components/BirdListItem';
import {useDispatch, useSelector} from 'react-redux';
import {addBirdSpot, removeBirdSpot} from '../actions/birdspot.actions';
import uuid from 'react-native-uuid';

function BirdListScreen({navigation, route}) {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const onPressBirdItem = item => {
    console.log('onPressBirdItem', item);
  };

  const addBird = () => {
    dispatch(
      addBirdSpot({
        id: uuid.v4(),
        species: 'Houtduif',
        walkId: route.params.item.id,
      }),
    );
  };

  const onPressRemoveBird = item => {
    dispatch(
      removeBirdSpot({
        id: item.id,
      }),
    );
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => addBird()} title="+" color="#fff" />
      ),
      headerBackTitle: '',
      title: route.params.item.location,
    });
  });

  const birdsForWalk = useMemo(() => {
    return store.birdSpots.birdsList.filter(
      bird => bird.walkId === route.params.item.id,
    );
  }, [route, store]);

  return (
    <View style={styles.container}>
      <FlatList
        data={birdsForWalk}
        renderItem={({item}) => (
          <BirdListItem
            bird={item}
            onBirdPressed={onPressBirdItem}
            onRemoveBirdPressed={onPressRemoveBird}
          />
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

export default BirdListScreen;
