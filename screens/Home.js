import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'}}>
          <Text>CS242 Assignment 3</Text>
          <Text>Developed By jim20</Text>
          <Button
          onPress = {() => this.props.navigation.navigate('Profile')}
          title = "View Profiles"></Button>
        </View>
    );
  }
}

