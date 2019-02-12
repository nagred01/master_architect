import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking,TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';

class LinkField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let heading = this.props.heading;
    let url = this.props.url;
    let action = this.props.onPressAction;
    let linkStyle = this.props.linkStyle ? this.props.linkStyle : {};
    let containerStyle = this.props.containerStyle ? this.props.containerStyle  : {}
    return (
        <View style={[styles.container,containerStyle]}>
        {
          heading &&
            <TouchableOpacity onPress={action}>
                <Text style={[styles.link, linkStyle]}>{heading}</Text>
            </TouchableOpacity>
        }
         </View>
    );
  }
}

let blueColor = AppSettings.linkColor;
// let fontFamily = AppSettings.fontFamily;
let fontSize = AppSettings.linkSize;

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  link: {
      color: blueColor,
      // fontFamily: fontFamily,
      fontSize: responsiveFontSize(fontSize),
      marginTop: responsiveHeight(1),
  },

});

export default LinkField