/*import React, {Component} from 'react';
import {View, Text, StyleSheet ,TextInput,Dimensions} from 'react-native';
var reactNative = require("react-native");
import Button from 'react-native-button';
import {responsiveHeight, responsiveFontSize} from 'react-native-cross-platform-responsive-dimensions';


export function getLoginStyleSheet() {
    return fetch("https://raw.githubusercontent.com/nagred01/Login/master/loginstyles.js").then((response) => {
        console.log("Style Sheet Response ==>" + response);
        return response.text();
    }).then((js) => {
        let factory = eval(`${js}`);
        let styles = factory(StyleSheet,Dimensions);
        console.log("StyleSheet Object ==>" + styles);
        return styles;
    });
} */
