import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import GetStarted from './screens/GetStarted'
import SignIn from './screens/SignIn'
import CreateAccount from './screens/CreateAccount'


const AppNavigator = createStackNavigator({
  GetStarted: {
    screen: GetStarted
  },
  SignIn: {
    screen: SignIn
  },
  CreateAccount: {
    screen: CreateAccount
  }
}, {
    initialRouteName: "GetStarted"
  });

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
