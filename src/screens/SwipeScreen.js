import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  Button,
} from 'react-native';

import {connect} from 'react-redux';

const SwipeScreen = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
      <Button title="Change Screen" />
      <Button title="Change Screen" />
      <Button
        title="Change Screen"
        onPress={() => {
          props.navigation.navigate('End');
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  text: state.name.text,
});

export default connect(mapStateToProps)(SwipeScreen);
