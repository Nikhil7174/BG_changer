import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff ');
  const [customColor, setCustomColor] = useState('');
  const [press, setPress] = useState(false);

  const generateCustomColor = () => {
    let color = customColor;
    setCustomColor(color);
    setPress(false);
  };

  const generateColor = () => {
    setPress(true);
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={press ? randomBackground : customColor} />
      <View
        style={[
          styles.container,
          {backgroundColor: press ? randomBackground : customColor},
        ]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtntxt}>Random Color</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Eg. #ffffff"
            placeholderTextColor="gray"
            onChangeText={newText => setCustomColor(newText)}
          />
        </View>
        <TouchableOpacity onPress={generateCustomColor}>
          <View style={styles.actionBtn2}>
            <Text style={styles.actionBtntxt2}>Custom Color</Text>
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
    backgroundColor: '#013236',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtn2: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: '#110136',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionBtntxt2: {
    fontSize: 14,
    color: '#ffffff',
  },
  actionBtntxt: {
    fontSize: 24,
    color: '#ffffff',
  },
  textInput: {
    backgroundColor: '#c5c5c5',
    color: '#ffffff',
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
});
