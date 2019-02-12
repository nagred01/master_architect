import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';

class ImageIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
       <View style={styles.container}>
              <Image style={styles.reasonImg} 
                source={this.props.imageUrl} 
                resizeMode="contain" 
              /> 
        </View>   
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  reasonImg: {
    height: responsiveHeight(6),
    width: responsiveWidth(30),
  }
});

export default ImageIcon