import React, { Component } from 'react';
import { View, Text,StyleSheet ,TextInput } from 'react-native';
import Button from 'react-native-button';
import { responsiveHeight, responsiveFontSize } from 'react-native-cross-platform-responsive-dimensions';
var reactNative = require("react-native");
import {getStyleSheet} from "./stylesheet";

export default class TempChangeUser1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newUserId: "",
      existingUserId: "SParmley",
      confirmUserId: "",
      data: []
    }
  }

  state = {};

  componentDidMount() {
        getStyleSheet().then(styles => {
          var localState = this;
              fetch("https://raw.githubusercontent.com/nagred01/RemoteComponent/master/testfile2.js").then((response) => {
                  return response.text();
              }).then((js) => {
                  let factory = eval(`${js}`);
                  let Component = factory(React, reactNative,localState,Button,styles,require);
                  this.setState({ test: Component });
              });
        });
  }

  render() {
    let { test } = this.state;
    if (test) {
      return (test);
    }
    else{
    return (
        <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: responsiveHeight(2)
      }}>
            <Text style={{color:'blue'}}> Loading..... </Text>
        </View>
    );
  }
}

}
