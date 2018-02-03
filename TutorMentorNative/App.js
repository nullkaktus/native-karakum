import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image } from 'react-native';

import { TabViewAnimated, TabViewPage, TabBarTop } from 'react-native-tab-view';
import { Icon } from 'react-native-elements';


import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
import PeopleList from './components/screens/PeopleList';
import PersonDetail from './components/screens/PersonDetail';
import InfoForm from './components/screens/InfoForm';

export default class AppApp extends React.Component{
  render(){
    return (
      <App/>
    )
  }
}

export const App = StackNavigator({
  Home: { screen: HomeScreen},
  PeopleList : {
    screen: PeopleList,
    navigationOptions: {
      title: 'Feed',
    },
  },
  PersonDetail: {
    screen: PersonDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
  InfoForm: {screen: InfoForm},
});


/*
export const FeedStack = StackNavigator({
  PeopleList: {
    screen: PeopleList,
    navigationOptions: {
      title: 'Feed',
    },
  },
  PersonDetail: {
    screen: PersonDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});

export const App = StackNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: PeopleList,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Me1: {
    screen: PeopleList,
    navigationOptions: {
      tabBarLabel: 'Me1',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});
*/


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

