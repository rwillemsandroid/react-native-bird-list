import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';

const WalkListItem = ({walk, onWalkPressed}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => onWalkPressed(walk)}>
      <View style={styles.listItemView}>
        <Text style={styles.locationText}>{walk.location}</Text>
        <Text style={styles.dateText}>
          {moment(walk.momentISOString).format('ddd, DD MMM')}
        </Text>
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
  locationText: {
    fontSize: 18,
  },
  dateText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default WalkListItem;
