import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, Text, Alert, StatusBar} from 'react-native';

//REDUX
import {Provider} from 'react-redux';
import configureStore from './store/store';
const store = configureStore();

import EndScreen from './screens/EndScreen';
import HomeScreen from './screens/HomeScreen';
import SwipeScreen from './screens/SwipeScreen';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
  const [sim, setSim] = useState(false);

  const checkSimulator = () => {
    if (DeviceInfo.isEmulator()) {
      setSim(true);
    }
  };

  useEffect(() => {
    checkSimulator();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* {sim
        ? Alert.alert('Alert', 'Emulator detected', [{text: 'ok'}])
        : Alert.alert('Alert', 'No emulator detected', [{text: 'ok'}])} */}
        <StatusBar barStyle="light-content" />

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Swipe"
            component={SwipeScreen}
            options={{title: 'Swipe'}}
          />
          <Stack.Screen
            name="End"
            component={EndScreen}
            options={{title: 'End'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
