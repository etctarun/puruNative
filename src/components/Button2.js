import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

//Color import
import Colors from '../constants/colors';

const Button2 = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.8}
        underlayColor={Colors.accentColor}
        onPress={() => {
          ToastAndroid.showWithGravity(
            'Clicked, TouchableHighlight',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }}>
        <Text style={styles.btnText}>Press me</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    width: 300,
    borderRadius: 10,
    padding: 15,
  },
  btnText: {
    color: Colors.primaryColor,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button2;
