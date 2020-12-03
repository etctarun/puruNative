import React from 'react';
import {StackActions} from '@react-navigation/native';
import {StyleSheet, View, Text, Button, Alert, StatusBar} from 'react-native';

import {connect} from 'react-redux';

const EndScreen = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.sex}</Text>
      <Button
        title="Back to home"
        onPress={() => {
          props.navigation.dispatch(StackActions.popToTop());
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  name: state.name.text,
  age: state.age.text,
  sex: state.sex.text,
});

export default connect(mapStateToProps)(EndScreen);
