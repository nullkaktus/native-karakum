import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import PeopleList from './PeopleList';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = ({ route }) => {
    switch (route.key) {
    case 'first':
      return <PeopleList />;
    case 'second':
      return <SecondRoute />;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
