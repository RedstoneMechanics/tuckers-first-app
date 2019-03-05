import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SING IN</Text><Text> username</Text>
        <Button title={'Create account'} onPress={() => this.props.navigation.navigate('CreateAccount')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44887b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});