import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import WalkListItem from '../components/WalkListItem';
import {useDispatch, useSelector} from 'react-redux';

function WalkListsScreen({navigation}) {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const onPressWalkItem = item => {
    navigation.navigate('Bird List', {item});
  };

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
