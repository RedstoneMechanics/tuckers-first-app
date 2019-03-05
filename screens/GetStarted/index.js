import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to Tucker's first app.</Text><Text>this is an app that will help you post and communicate</Text><Text> throughout your family.</Text>
        <Button title={'get started'} onPress={() => this.props.navigation.navigate('SignIn')}></Button>
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