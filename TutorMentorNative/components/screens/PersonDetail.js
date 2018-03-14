import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

export default class PersonDetail extends Component {
  render() {
    const { firstName, familyName, subtitle} = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          //imageSrc={{ uri:avatar_url}}
          featured
          title={`${familyName.toUpperCase()}`}
          caption={firstName}
        />

      </ScrollView>
    );
  }
}

