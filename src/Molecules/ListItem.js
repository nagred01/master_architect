
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    responsiveFontSize, responsiveHeight,
    responsiveWidth
} from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';
import LinkFieldWithIcon from '../Atoms/LinkFieldWithIcon';
import ListSubItem from '../Molecules/ListSubItem';

export default class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer} >
                    <Text style={styles.accountLabel}>  {this.props.accountItem.acType} </Text></View>

                {this.props.accountItem.items.map((subType, index) => {

                    return (<ListSubItem
                        key={index}
                        itemIndex={index}
                        accountSubItem={subType}
                    />
                    );
                })
                }
            </View>
        );
    }
}

const labelSize = AppSettings.labelSize;
const backgroundColor = AppSettings.backGroundColor;
const borderColor = AppSettings.borderColor;

const styles = StyleSheet.create({

    subContainer: {
        padding: responsiveHeight(1.6),
        backgroundColor: backgroundColor,
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
        padding: responsiveHeight(2)
    },
    availableText: {
        color: borderColor, textAlign: "right"
    },
    alignText: {
        justifyContent: "flex-end"
    },
    fontSize: {
        fontSize: responsiveFontSize(1.5),
    },
    color: {
        color: borderColor
    },
    accountLabel : {
         fontSize : responsiveFontSize(labelSize)
    }
});
