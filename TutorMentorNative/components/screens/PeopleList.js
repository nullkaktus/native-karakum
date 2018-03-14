import React from 'react';
import {
    StackNavigator,
    TabNavigator
  } from 'react-navigation';

import { List, ListItem, ListView } from 'react-native-elements';
//import peopleData from './people.json';
import PersonDetail from './PersonDetail';

import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  View
  // ...others
} from 'react-native';


export default class PeopleList extends React.Component{

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }

    onLearnMore = (user) => {
        console.log(user.name);
        this.props.navigation.navigate('PersonDetail', { ...user });
        console.log(user.name);

      };

    componentDidMount(){
        return fetch('http://192.168.0.103:3000/people.json')
          .then((response) => response.json())
          .then((responseJson) => {

            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }
    
      
      render () {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

        return (
            <List containerStyle={{marginBottom: 20}} >
            {
                this.state.dataSource.movies.map((l, i) => (
                    <ListItem
                    roundAvatar
                    //avatar={{uri:l.avatar_url}}
                    key={i}
                    title={l.firstName + ' ' + l.familyName}
                    onPress={ () => this.props.navigation.navigate('PersonDetail', { ...l }) }
                    />
                ))
            }
            </List>
          );
      }
}
