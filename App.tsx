import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtntxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtntxt: {
    fontSize: 24,
  },
});
