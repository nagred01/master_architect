import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import AppSettings from '../Settings/AppSettings';

class CustomDivider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let customStyle = this.props.customStyle ? this.props.customStyle : {}
    return (

      <View style={styles.container}>
        <Divider style={[styles.divider, this.props.customStyle]} />
      </View>

    );
  }
}

const DividerColor = AppSettings.dividerColor;
const styles = StyleSheet.create({
  divider: {
    backgroundColor: DividerColor,
  },
  container : {
    flex : 1
  }

});

export default CustomDivider