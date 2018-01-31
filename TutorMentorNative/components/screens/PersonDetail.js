import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

export default class PersonDetail extends Component {
  render() {
    const { name, avatar_url, subtitle} = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri:avatar_url}}
          featured
          title={`${name.toUpperCase()}`}
          caption={name}
        />

      </ScrollView>
    );
  }
}

