import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';

export default class AppApp extends React.Component{
  render(){
    return (
      <App/>
    )
  }
}

export const App = StackNavigator({
  Home: { screen: HomeScreen}
});


/*class SearchPage extends React.Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}*/


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
