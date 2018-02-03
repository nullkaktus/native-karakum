import React, { Component } from 'react';
import { View, TextInput, Picker, PickerItem, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';


export default class InfoForm extends Component {
  constructor(props){
    super(props);
    this.errorMessage = null;
  };
 
  handleUniversity = (uni) =>{
    console.log(uni);
  }
  errorHandler = (uni) => {
    console.log('errorHandler ');
    //  this.formInput.shake();
      this.errorMessage = "Error";
      console.log(this.errorMessage);
  }
  alertFunc = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      ],
      { cancelable: true }
    )
  }


  render() {
 
    return (
      <View>
        <FormLabel>University</FormLabel>
        <FormInput placeholder = {this.props.errorMessage} onChangeText={(uni) => this.handleUniversity(uni)} onEndEditing={(uni) => this.errorHandler(uni)}
            ref={ref => this.formInput = ref}/>
        <FormValidationMessage>{this.errorMessage}</FormValidationMessage>
        <FormLabel>Topic</FormLabel>
        <FormInput/>
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <FormInput/>
        <Button
          raised
          icon={{name: 'input'}}
          backgroundColor='#00838f'
          title='BUTTON WITH ICON'
          onPress={() => this.alertFunc()} />
      </View>
    );
  }
}

