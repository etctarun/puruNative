import React from 'react';
import {StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';

//Color import
import Colors from '../constants/colors';

//Redux
import {connect} from 'react-redux';

const EndScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.txtContainer}>
          <Text style={styles.label}>Name :</Text>
          <Text style={styles.txt}>{props.name}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.label}>Age :</Text>
          <Text style={styles.txt}>{props.age}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.label}>Sex :</Text>
          <Text style={styles.txt}>{props.sex}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.dispatch(StackActions.popToTop());
          }}>
          <Text style={styles.btnText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  name: state.name.text,
  age: state.age.text,
  sex: state.sex.text,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.light,
  },
  card: {
    height: 300,
    justifyContent: 'center',
    borderRadius: 10,
    overflow:
      Platform.os === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  label: {
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  txtContainer: {
    margin: 20,
  },
  txt: {
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'left',
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    width: 200,
    padding: 15,
    elevation: 5,
    borderRadius: 40,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default connect(mapStateToProps)(EndScreen);
