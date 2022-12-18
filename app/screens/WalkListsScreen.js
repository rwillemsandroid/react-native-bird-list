import React from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import WalkListItem from '../components/WalkListItem';
import {useDispatch, useSelector} from 'react-redux';
import {addWalk} from '../actions/walks.actions';
import moment from 'moment';

function WalkListsScreen({navigation}) {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const onPressWalkItem = item => {
    navigation.navigate('Bird List', {item});
  };

  const addWalkPressed = () => {
    dispatch(
      addWalk({
        id: uuid.v4(),
        date: moment(),
        location: 'visbeekvallei',
      }),
    );
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={addWalkPressed} title="+" color="#fff" />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={store.walks.walks}
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
