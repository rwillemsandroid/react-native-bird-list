import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';

function AddWalkBottomSheet({bottomSheetRef, onAddWalk}) {
  const snapPoints = useMemo(() => ['35%'], []);
  const [newWalkName, onChangeNewWalkName] = React.useState('');

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, [bottomSheetRef]);

  const addWalkPressed = useCallback(() => {
    onChangeNewWalkName('');
    onAddWalk(newWalkName);
    closeBottomSheet();
  }, [newWalkName, onChangeNewWalkName, onAddWalk, closeBottomSheet]);

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
          <Text style={styles.bottomSheetTitle}>Add a new walk:</Text>
        </View>
        <BottomSheetTextInput
          style={styles.bottomSheetInput}
          value={newWalkName}
          placeholder="Add a name for the new walk."
          onChangeText={onChangeNewWalkName}
        />
        <View style={styles.bottomSheetButtonContainer}>
          <Button
            title="Add new walk"
            onPress={addWalkPressed}
            disabled={newWalkName.length === 0}
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
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bottomSheetInput: {
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

export default AddWalkBottomSheet;
