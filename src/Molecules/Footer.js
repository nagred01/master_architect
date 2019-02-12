import React, { Component } from 'react';
import {  View, StyleSheet,TouchableOpacity} from 'react-native';
import IconButton from '../Atoms/IconButton';
import {
  responsiveFontSize, responsiveHeight,
  responsiveWidth
} from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default class Footer extends Component {
    
  render() {
    let iPhonexStyle;
    if(isIphoneX){iPhonexStyle = styles.padding1}
    return (
      <View style={styles.container}>
        <View style={styles.bottomLayer}>
          <View style= {[styles.padding, iPhonexStyle]}>
            <IconButton color="green" label="Accounts" iconType="MaterialCommunityIcons" iconName={"account-box-multiple"} iconSize={3}> </IconButton>
          </View>
          <View style= {[styles.padding, iPhonexStyle]}> 
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CameraScreen")}}>
            <IconButton color="gray" label="Deposit" iconType="FontAwesome" iconName={"camera"} iconSize={3} > </IconButton>
           </TouchableOpacity>
          </View>
          <View style= {[styles.padding, iPhonexStyle]}>
            <IconButton color="gray" label="Transfer" iconType="FontAwesome" iconName={"bank"} iconSize={3}> </IconButton>
          </View>
          <View style= {[styles.padding, iPhonexStyle]}>
            <IconButton color="gray" label="Bill Pay" iconType="FontAwesome" iconName={"dollar"} iconSize={3}> </IconButton>
          </View>
          <View style= {[styles.padding, iPhonexStyle]}>
            <IconButton color="gray" label="Spending" iconType="FontAwesome" iconName={"file-text"} iconSize={3}> </IconButton>
          </View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomLayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveHeight(2),
    marginRight: responsiveHeight(2),
  },
  padding : {
    padding : responsiveHeight (2),
  },
  padding1 : {
    padding : responsiveHeight (1.5),
  },
  container :{ 
    backgroundColor: AppSettings.backGroundColor
  }
});