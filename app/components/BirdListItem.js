import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BirdListItem = ({bird, onBirdPressed, onRemoveBirdPressed}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => onBirdPressed(bird)}>
      <View style={styles.listItemView}>
        <Text style={styles.speciesText}>{bird.species}</Text>
        <Icon
          name={'minuscircle'}
          size={20}
          color={'red'}
          onPress={() => onRemoveBirdPressed(bird)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speciesText: {
    fontSize: 18,
  },
});

export default BirdListItem;
