import React from 'react';
import {StyleSheet, View, Text, ToastAndroid, Button} from 'react-native';

//Color import
import Colors from '../constants/colors';

import SwipeButton from 'rn-swipe-button';

//import butttons
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import Button3 from '../components/Button3';
import arrowRight from '../assets/arrow-right.png';

//Redux
import {connect} from 'react-redux';

const SwipeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.label}>Registerd Name :</Text>
        <Text style={styles.txt}>{props.text}</Text>
      </View>

      <Button1 />
      <Button2 />
      <Button3 />

      <View style={styles.swipeContainer}>
        <SwipeButton
          thumbIconImageSource={arrowRight}
          thumbIconBackgroundColor={Colors.background}
          title="Slide to see full details"
          disabled={false}
          onSwipeSuccess={() => {
            props.navigation.navigate('End');
          }}
          railStyles={{
            backgroundColor: Colors.accentColor,
            borderColor: Colors.primaryColor,
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  text: state.name.text,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  txtContainer: {
    flexDirection: 'column',
    margin: 10,
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  txt: {
    color: Colors.dark,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'left',
  },
  swipeContainer: {
    marginTop: 40,
  },
});

export default connect(mapStateToProps)(SwipeScreen);
