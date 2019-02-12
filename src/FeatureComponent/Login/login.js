import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Activity, Image, TextInput, Alert ,ActivityIndicator} from 'react-native';
import { Content, Item, Label, Button, Input, Container, Toast } from 'native-base';
import logo from '../../Images/Mainlog.png';
import { responsiveHeight, responsiveFontSize } from 'react-native-cross-platform-responsive-dimensions';
//import { getLoginStyleSheet } from "./loginStyle";
import Overlay from 'react-native-modal-overlay';
import {AsyncStorage} from 'react-native';

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
            progressModal:false
        };
    }
 
    componentWillMount(){
        _storeData = async () => {
            try {
              await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
            } catch (error) {
              // Error saving data
            }
          };
    }
    

      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('TASKS');
          if (value !== null) {
            // We have data!!
            console.log("Token Value =>"+value);
          }
        } catch (error) {
          // Error retrieving data
          console.log("Token Value Error =>"+error);
        }
      };

    componentDidMount() {
        var componentstate = this;
       // console.log("Login Js Call => ");
        fetch("https://raw.githubusercontent.com/nagred01/Login/style/login.js").then((response) => {
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
        this._retrieveData();
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
