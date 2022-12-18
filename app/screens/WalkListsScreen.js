import React, {useCallback, useMemo} from 'react';
import {Button, Text, FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import WalkListItem from '../components/WalkListItem';
import {useDispatch, useSelector} from 'react-redux';
import {addWalk} from '../actions/walks.actions';
import moment from 'moment';
import AddWalkBottomSheet from '../bottomsheets/AddWalkBottomSheet';

function WalkListsScreen({navigation}) {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const bottomSheetRef = React.useRef('addWalkBottomSheet');

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, [bottomSheetRef]);

  const onPressWalkItem = item => {
    navigation.navigate('Bird List', {item});
  };

  const addWalkPressed = newWalkName => {
    if (newWalkName.length > 0) {
      dispatch(
        addWalk({
          id: uuid.v4(),
          location: newWalkName,
          momentISOString: moment().toISOString(),
        }),
      );
    }
  };

  const openAddWalkBottomSheet = useCallback(() => {
    openBottomSheet();
  }, [openBottomSheet]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={openAddWalkBottomSheet} title="+" color="#fff" />
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
      <AddWalkBottomSheet
        bottomSheetRef={bottomSheetRef}
        onAddWalk={addWalkPressed}
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
