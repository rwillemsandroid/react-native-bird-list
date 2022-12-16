import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function BirdListScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{route.params.item.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 40,
    color: 'red',
  },
});

export default BirdListScreen;
