import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  StatusBar,
  Button,
} from 'react-native';

import {connect} from 'react-redux';

import {setName} from '../store/actions/name';
import {setAge} from '../store/actions/age';
import {setSex} from '../store/actions/sex';

const HomeScreen = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputSex, setInputSex] = useState('');
  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(t) => setInputName(t)}
          value={inputName}
        />
      </View>
      <View>
        <Text>Age</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(t) => setInputAge(t)}
          value={inputAge}
        />
      </View>
      <View>
        <Text>Sex</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(t) => setInputSex(t)}
          value={inputSex}
        />
      </View>

      <Button
        title="Continue"
        onPress={() => {
          props.setNameText(inputName);
          props.setAgeText(inputAge);
          props.setSexText(inputSex);
          props.navigation.navigate('Swipe');
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  text: state.name.text,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setNameText: (name) => dispatch(setName(name)),
    setAgeText: (age) => dispatch(setAge(age)),
    setSexText: (sex) => dispatch(setSex(sex)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
