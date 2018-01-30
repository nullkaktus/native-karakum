import React from 'react';


import { List, ListItem, ListView } from 'react-native-elements'



export default class PeopleList extends React.Component{
    state  = { data:[
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }
    ]};
    
      
      render () {
        return (
            <List>
                {
                    this.state.data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={this.state.data.name}
                        roundAvatar avatar={{uri:this.state.data.avatar_url}}
                    />
                    ))
                }
            </List>
        )
      }
}
