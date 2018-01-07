import React from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <Button
        title="Go to Jane's profile lala"/>
    );
  }
};


