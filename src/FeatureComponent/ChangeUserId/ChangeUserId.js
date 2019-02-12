import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, ScrollView, Platform, TextInput } from 'react-native';
import {
    responsiveFontSize, responsiveHeight,
} from 'react-native-cross-platform-responsive-dimensions';
import Footer from '../../Molecules/Footer';
import CustomDivider from '../../Atoms/CustomDivider';
import Header from '../../Molecules/Header';
import AppSettings from '../../Settings/AppSettings';
import Button from 'react-native-button'

export default class ChangeUserId extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newUserId : "",
            existingUserId : "SParmley",
            confirmUserId: ""
        }
    }
    
    cancel = () => {
        alert("Cancel")
    }

    saveChanges = () => {
        alert("Save Changes")
        alert(this.state.newUserId)
    }

    onNewUserIdChange = (val) => {
        alert(val)
        this.setState({ newUserId : val })
    }
    onconfirmUserIdChange = (val) => {
        this.setState( { confirmUserId : val })
    }

    render() {
        let i = 1;
        let isAndroid = Platform.OS == "android" ? true : false
        return (

            React.createElement(View, {  style: styles.container},
                [
                    React.createElement(View,
                        {key:++i, style: isAndroid ? {} : { paddingTop: 10 }},
                        [
                            React.createElement(Header, { key : ++i})
                        ]),

                    React.createElement(View,{key:++i, style: styles.mainContainer },
                    [
                            React.createElement(View, { key:++i,style: styles.accountSummaryContainer },
                                [
                                    React.createElement(Text,{ key:++i,style: styles.accountSummaryText },["Change User ID"])
                                ]
                            ),
                            React.createElement(View, { key:++i,style: styles.grayLine }, [
                                React.createElement(CustomDivider,{key:++i})
                            ])
                    ]),
                    React.createElement(ScrollView, {key:++i, style: styles.scrollView },
                    [
                          // inside the ScrollView 
                          React.createElement(View,{key:++i,style : {height:500}},[

                            React.createElement(View,{ key:++i,style : {flex:1}},[
                                React.createElement(View,{key:++i},[
                                    React.createElement(Text,{key:++i},[
                                        "Your user Id must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive."
                                    ])        
                                ]),

                                //
                                React.createElement(View,{key:++i},[
                                    React.createElement(View,{
                                        key:++i, style :{
                                        marginTop: responsiveHeight(2),
                                        backgroundColor: "#FAFAFA", borderRadius: 1, padding: responsiveHeight(2.2)
                                    }},
                                    [
                                     React.createElement(View,{key:++i, style:{  marginTop: responsiveHeight(1), marginBottom: 0 }},[
                                            // 
                                            React.createElement(View,{key:++i},[
                                                React.createElement(Text,{key:++i, style :{ color: "gray" }},[
                                                    "Existing User ID"
                                                ]) 
                                            ]) ,
                                            React.createElement(View,{key:++i},[
                                                //
                                                React.createElement(Text,{ key:++i},[
                                                    this.state.existingUserId
                                                ]) 
                                            ])
                                    ]),
                                    
                                    React.createElement(View,{key:++i, style:{marginTop: responsiveHeight(3)}},[
                                        // 
                                        React.createElement(View,{ key:++i},[
                                            React.createElement(Text,{ key:++i,style :{ color: "gray" }},[
                                                "New User ID"
                                            ]) 
                                        ]) ,
                                        React.createElement(View,{key:++i,style :{marginTop: responsiveHeight(1)}},[
                                            //
                                            React.createElement(TextInput,{key:++i, style : {borderWidth: 0.9, padding: 0, backgroundColor: "white", borderColor: "gray"} ,
                                            onChangeText : this.onNewUserIdChange},[
                                                this.state.newUserId
                                            ]) 
                                        ])
                                    ])
                                    ,
                                    React.createElement(View,{key:++i, style :{ marginTop: responsiveHeight(3)}},[
                                        // 
                                        React.createElement(View,{ key:++i},[
                                            React.createElement(Text,{ key:++i,style :{ color: "gray" }},[
                                                "Confirm  User ID"
                                            ]) 
                                        ]) ,
                                        React.createElement(View,{key:++i,style : {marginTop: responsiveHeight(1)}},[
                                            //
                                            React.createElement(TextInput,{ key:++i,style : {borderWidth: 0.9, padding: 0, backgroundColor: "white", borderColor: "gray"}
                                            ,onChangeText : this.onconfirmUserIdChange},
                                            [
                                                this.state.confirmUserId
                                            ]) 
                                        ])
                                    ])
                                    
                                    ]),
                                    React.createElement(View,{key:++i, style : {marginTop: responsiveHeight(4)}},[
                                        
                                        React.createElement(View,{ key:++i,style:{ marginTop: responsiveHeight(2)}},[
                                            // 
                                            React.createElement(View,{ key:++i},[
                                                React.createElement(Button,{key:++i,style : {fontSize:responsiveFontSize(2),fontWeight :"normal",padding: responsiveHeight(0.5), color: "white", borderWidth: responsiveHeight(0.1), borderColor: "#015EBF", backgroundColor: "#0061b8" },
                                                onPress: this.saveChanges
                                                },[
                                                    "Save Changes",
                                                    
                                                ]) 
                                            ])
                                        ]),
                                        React.createElement(View,{key:++i, style:{ marginTop: responsiveHeight(1.9) }},[
                                            // 
                                            React.createElement(View,{ key:++i},[
                                                React.createElement(Button,{key:++i,style : {fontSize:responsiveFontSize(2),  fontWeight :"normal", padding: responsiveHeight(0.5), borderWidth: responsiveHeight(0.1), borderColor: "#0061b8", backgroundColor: "white" },
                                                onPress: this.cancel
                                                },[
                                                    "Cancel"
                                                ]) 
                                            ])
                                        ])
                                    ]) 
                                ])
                            ])
                          ]),
                    ])
                    ,
                    React.createElement(Footer,{key:++i})
                ]
            )
        )
    }
}

const titleSize = AppSettings.titleFontSize;
const grayColor = AppSettings.dividerColor;

const styles = StyleSheet.create({
    bottomLayer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveHeight(2),
        marginRight: responsiveHeight(2),
    },
    container: {
        flex: 1,
    },
    padding: {
        padding: responsiveHeight(2),
    },
    scrollView: {
        flex: 1,
        backgroundColor: "white",
        padding: responsiveHeight(2)
    },
    headerContainter: {
        flexDirection: "row",
        paddingTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
        // alignContent:"center",
        backgroundColor: "blue",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    accountSummaryContainer: {
        paddingBottom: responsiveHeight(2),
        paddingLeft: responsiveHeight(1.5)
    },
    accountSummaryText: {
        fontSize: responsiveFontSize(titleSize),
        textAlign: "justify"
    },
    customStyle: {
        backgroundColor: "green"
    },
    headerBorder: {
        alignItems: "center",
        flexDirection: "row",
        paddingTop: responsiveHeight(0.3)
    },
    mainContainer: {
        justifyContent: "flex-start", backgroundColor: "white", padding: responsiveHeight(1)
    },
    grayLine: {
        marginLeft: responsiveHeight(1), marginRight: responsiveHeight(1)
    }
});