import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

//Color import
import Colors from '../constants/colors';

const Button1 = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          ToastAndroid.showWithGravity(
            'Clicked, TouchableOpacity',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        }}>
        <Text style={styles.btnText}>Press me</Text>
      </TouchableOpacity>
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
    backgroundColor: Colors.light,
    width: 300,
    padding: 15,
    elevation: 10,
  },
  btnText: {
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button1;
