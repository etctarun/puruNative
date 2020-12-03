import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

//Color import
import Colors from '../constants/colors';

const Button3 = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => {
          ToastAndroid.showWithGravity(
            'Clicked, TouchableWithoutFeedback',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }}>
        <Text style={styles.btnText}>Press me</Text>
      </TouchableWithoutFeedback>
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
    width: 300,
    padding: 15,
  },
  btnText: {
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Button3;
