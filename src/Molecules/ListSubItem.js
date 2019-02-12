
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    responsiveFontSize, responsiveHeight,
    responsiveWidth
} from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';
import LinkFieldWithIcon from '../Atoms/LinkFieldWithIcon';

export default class ListSubItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let accountSubItem = this.props.accountSubItem;

        return (
            <View style={styles.textContainer}>
                <View>
                    <View>
                        <LinkFieldWithIcon heading={accountSubItem.name} iconName={accountSubItem.iconType}
                            fontSize={responsiveHeight(2)}
                            color={AppSettings.linkColor}></LinkFieldWithIcon>
                    </View>
                    <View style={styles.topSpacer}>
                        <Text style={[styles.color, styles.fontSize]}>{accountSubItem.xType}</Text></View>
                </View>
                <View>
                    <View style={styles.alignText}>
                        <Text style={[styles.availableText, styles.fontSize]}>{accountSubItem.availableType}</Text></View>
                    <View style={[styles.alignText,styles.topSpacer]}>
                        <Text style={{ textAlign: "right" , fontSize : responsiveFontSize(labelSize)}}>{accountSubItem.balance}</Text></View>
                    {(accountSubItem.type!="" )&& 
                        <View styles={styles.bottomSpacer}><Text style={[styles.availableText,styles.fontSize]}>{accountSubItem.type}-{accountSubItem.LBalance}</Text></View>
                     }   
                     {(accountSubItem.outStanding!="") &&
                        <View styles={styles.bottomSpacer}>
                            <Text style={[styles.availableText, styles.fontSize]}>{accountSubItem.outStanding}</Text>
                        </View>
                    }
                     
                </View>
            </View>
        );
    }
}

//const menuFonts = AppSettings.labelSize;
const labelSize = AppSettings.linkSize;

const backgroundColor = AppSettings.backGroundColor;
const borderColor = AppSettings.borderColor;

const styles = StyleSheet.create({
    subContainer: {
        padding: responsiveHeight(1),
        backgroundColor: backgroundColor
    },
    textContainer: {
        backgroundColor: "white",
        paddingTop: responsiveHeight(1),
        borderTopWidth: responsiveHeight(0.1),
        borderBottomColor: borderColor,
        borderTopColor: borderColor,
        borderBottomWidth: responsiveHeight(0.1),
        flexDirection: "row",
        justifyContent: "space-between",
        padding: responsiveHeight(2),
    },
    availableText: {
        color: borderColor, 
        textAlign: "right",
        paddingTop : responsiveHeight(0.5)
    },
    alignText: {
        justifyContent: "flex-end"
    },
    xTypefontSize: {
        fontSize: responsiveFontSize(1.5),
    },
    fontSize: {
        fontSize: responsiveFontSize(labelSize),
    },
    color: {
        color: borderColor
    },
    topSpacer : {
        paddingTop : responsiveHeight(0.5)
    },
    // bottomSpacer :{
    //     paddingBottom :responsiveHeight(9)
    // }
});
