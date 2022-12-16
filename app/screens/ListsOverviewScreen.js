import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const ListsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Lists</Text>
    </View>
  );
};

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

export default ListsOverviewScreen;
