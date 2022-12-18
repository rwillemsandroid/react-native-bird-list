import React, {useCallback, useMemo} from 'react';
import {Button, Text, FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import WalkListItem from '../components/WalkListItem';
import {useDispatch, useSelector} from 'react-redux';
import {addWalk} from '../actions/walks.actions';
import moment from 'moment';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';

function WalkListsScreen({navigation}) {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const bottomSheetRef = React.useRef();
  const snapPoints = useMemo(() => ['30%'], []);

  const [newWalkName, onChangeNewWalkName] = React.useState('Wandeling');

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, [bottomSheetRef]);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, [bottomSheetRef]);

  const onPressWalkItem = item => {
    navigation.navigate('Bird List', {item});
  };

  const addWalkPressed = () => {
    if (newWalkName.length > 0) {
      dispatch(
        addWalk({
          id: uuid.v4(),
          location: newWalkName,
          momentISOString: moment().toISOString(),
        }),
      );
      closeBottomSheet();
      onChangeNewWalkName('');
    }
  };

  const openAddWalkBottomSheet = () => {
    openBottomSheet();
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={openAddWalkBottomSheet} title="+" color="#fff" />
      ),
    });
  });

  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={'close'}
        enablePanDownToClose={true}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={store.walks.walks}
        renderItem={({item}) => (
          <WalkListItem walk={item} onWalkPressed={onPressWalkItem} />
        )}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetTitleRow}>
            <Text style={styles.bottomSheetTitle}>Add a new walk:</Text>
          </View>
          <BottomSheetTextInput
            style={styles.newWalkInput}
            value={newWalkName}
            placeholder="Add a name for the new walk."
            onChangeText={onChangeNewWalkName}
          />
          <Button
            title="Add new walk"
            onPress={addWalkPressed}
            disabled={newWalkName.length === 0}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
  },
  bottomSheetContainer: {
    flex: 1,
    alignItems: 'stretch',
    padding: 12,
  },
  bottomSheetTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newWalkInput: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
});

export default WalkListsScreen;
