import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

//Color import
import Colors from '../constants/colors';

//Redux
import {connect} from 'react-redux';
import {setName} from '../store/actions/name';
import {setAge} from '../store/actions/age';
import {setSex} from '../store/actions/sex';

const HomeScreen = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputSex, setInputSex] = useState('');

  const onSubmit = () => {
    props.setNameText(inputName);
    props.setAgeText(inputAge);
    props.setSexText(inputSex);
    ToastAndroid.showWithGravity(
      'Successfully stored',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    props.navigation.navigate('Swipe');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(t) => setInputName(t)}
          value={inputName}
        />
      </View>
      <View>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="numeric"
          maxLength={3}
          onChangeText={(t) => setInputAge(t)}
          value={inputAge}
        />
      </View>
      <View>
        <Text style={styles.label}>Sex</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(t) => setInputSex(t)}
          value={inputSex}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNameText: (name) => dispatch(setName(name)),
    setAgeText: (age) => dispatch(setAge(age)),
    setSexText: (sex) => dispatch(setSex(sex)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.light,
  },
  label: {
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  inputBox: {
    height: 40,
    fontSize: 18,
    padding: 10,
    marginBottom: 12,
    borderColor: Colors.background,
    borderWidth: 1,
  },

  btnContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.accentColor,
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

export default connect(null, mapDispatchToProps)(HomeScreen);
