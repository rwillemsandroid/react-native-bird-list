import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';

function AddBirdBottomSheet({bottomSheetRef, onAddBird}) {
  const snapPoints = useMemo(() => ['35%'], []);
  const [newBirdName, onChangeNewBirdName] = React.useState('');

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, [bottomSheetRef]);

  const addBirdPressed = useCallback(() => {
    onChangeNewBirdName('');
    onAddBird(newBirdName);
    closeBottomSheet();
  }, [newBirdName, onChangeNewBirdName, onAddBird, closeBottomSheet]);

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
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.bottomSheetTitleRow}>
          <Text style={styles.bottomSheetTitle}>Add a new bird</Text>
        </View>
        <BottomSheetTextInput
          style={styles.newWalkInput}
          value={newBirdName}
          placeholder="What kind of bird did you see?"
          onChangeText={onChangeNewBirdName}
        />
        <View style={styles.bottomSheetButtonContainer}>
          <Button
            style={styles.bottomSheetButton}
            title="Add new bird"
            onPress={addBirdPressed}
            disabled={newBirdName.length === 0}
          />
        </View>
      </View>
    </BottomSheet>
  );
}
const styles = StyleSheet.create({
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
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newWalkInput: {
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
  bottomSheetButtonContainer: {
    padding: 8,
  },
});

export default AddBirdBottomSheet;
