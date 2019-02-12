import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from 'react-native-button';
import { responsiveHeight, responsiveFontSize } from 'react-native-cross-platform-responsive-dimensions';
var React1 = require("react-native");

export default class TempChangeUserId extends Component {

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
      fetch("https://raw.githubusercontent.com/jaiminp21/RemoteComponenet/master/remote.js").then((response) => {
        return response.text();
      }).then((js) => {
        let factory = eval(`${js}`);
        //let factory = Function(`exports = {}; return (function(require) { ${js} return exports.default })`)()
        let Component = factory(React,React1,require);
        this.setState({ Component })
      });
    }
    
    render() {
      let { Component } = this.state;
      if (Component) {
        return (<Component { ...this.props } />);
      }
      return <View><Text>Nice to have </Text></View>;
    }
}