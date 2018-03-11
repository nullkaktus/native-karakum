import React from 'react';
import {
    StackNavigator,
    TabNavigator
  } from 'react-navigation';

import { List, ListItem, ListView } from 'react-native-elements';
import peopleData from './people.json';
import PersonDetail from './PersonDetail';

import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  // ...others
} from 'react-native';


export default class PeopleList extends React.Component{

    onLearnMore = (user) => {
        console.log(user.name);
        this.props.navigation.navigate('PersonDetail', { ...user });
        console.log(user.name);

      };
    
      
      render () {
        return (
            <List containerStyle={{marginBottom: 20}}>
            {
                peopleData.map((l, i) => (
                    <ListItem
                    roundAvatar
                    avatar={{uri:l.avatar_url}}
                    key={i}
                    title={l.name}
                    onPress={ () => this.props.navigation.navigate('PersonDetail', { ...l }) }
                    />
                ))
            }
            </List>
          );
      }
}
