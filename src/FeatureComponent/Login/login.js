import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Activity, Image, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Content, Item, Label, Button, Input, Container, Toast } from 'native-base';
import logo from '../../Images/Mainlog.png';
import { responsiveHeight, responsiveFontSize } from 'react-native-cross-platform-responsive-dimensions';
//import { getLoginStyleSheet } from "./loginStyle";
import Overlay from 'react-native-modal-overlay';
import { AsyncStorage } from 'react-native';
import TouchID from 'react-native-touch-id';

var reactNative = require("react-native");

var react_1 = React;
var nativebase = require("native-base");

var root = this;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            style: '',
            loading: true,
            token: '',
            progressModal: false
        };
    }

    componentWillMount() {
        var componentstate = this;
        console.log("Token Value 111111=>");
        fetch("https://raw.githubusercontent.com/nagred01/Login/final/login.js").then((response) => {
            // console.log("Login Js Obj=>" + response);
            return response.text();
        }).then((js) => {
            //console.log("Login Js Obj Factory =>" + js);
            let factory = eval(`${js}`);
            let Component = factory(React, reactNative, nativebase, componentstate, StyleSheet, Dimensions, require);
            // console.log("Login Js Obj Component =>");
            this.setState({
                test: Component,
                loading: false,
            });
        });
    }

    _storeData = async (Token) => {
        try {
            console.log("Token Value set =>");
            await AsyncStorage.setItem('token', Token);
            console.log("Token Value set 1111=>");
        } catch (error) {
            // Error retrieving data
            console.log("Will Mount Storage Set =>" + error.message);
        }
    }

    _retrieveData = async () => {
        console.log("User ID Token Call => ");
        try {
           let token = await AsyncStorage.getItem('token') || 'none';
            console.log("User ID => "+token);
            this.props.navigation.navigate("AccountSummary");
          } catch (error) {
            // Error retrieving data
            console.log("Error Message Storage =>"+error.message);
          }
      };


      faceIdLogin() {
        TouchID.isSupported().then(biometryType => {
            // Success code
            if (biometryType === 'FaceID') {
              console.log('FaceID is supported =>');
              TouchID.authenticate('Authenticate with FaceID').then(success => {
                console.log("Face ID Authenticate ID => " + success);
                this.setState({ locked: false });
              }).catch(error => {
                console.log("Touch ID Authenticate Error =>" + error);
              });
            } else {
              TouchID.authenticate('Authenticate with fingerprint').then(success => {
                console.log("Touch ID Authenticate ID => " + success);
                this.setState({ locked: false });
              }).catch(error => {
                console.log("Touch ID Authenticate Error =>" + error);
              });
              console.log('TouchID is supported =>');
            }
          }).catch(error => {
            // Failure code
            console.log(error);
          });
    }

    


    render() {
        if (this.state.loading) {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: responsiveHeight(2),

                }}>
                    <Text style={{ color: 'blue' }}> Loading..... </Text>
                </View>
            );
        } else if (this.state.progressModal) {
            return (<View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: responsiveHeight(2),

            }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>);
        } else {
            let { test } = this.state;
            if (test) {
                return (test);


            }
        }
    }
}
export default Login;
