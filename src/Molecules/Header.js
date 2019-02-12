import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconButton from '../Atoms/IconButton';
import ImageIcon from '../Atoms/ImageIcon';
import CustomDivider from '../Atoms/CustomDivider';;
import {
    responsiveFontSize, responsiveHeight,
    responsiveWidth
} from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.headerContainter}>
                <View style={styles.headerSubContainer}>
                    <ImageIcon imageUrl={require('../../assets/images/logo2.png')}> </ImageIcon>
                </View>

                <View style={styles.iconSubContainer}>
                    <View style={{ padding: responsiveHeight(1) }}>
                        <IconButton color="green" iconType="Ionicons"
                            iconName={"ios-keypad"} iconSize={4.3}>
                        </IconButton>
                    </View>
                    <View style={{ padding: 2}}>
                        <Text style={styles.menuItems}> Menu</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const menuFonts = AppSettings.labelSize;

const styles = StyleSheet.create({

    headerContainter: {
        flexDirection: "row",
        paddingTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
        backgroundColor: "white",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    headerSubContainer: {
        // backgroundColor: "red",
        flex: 1,
        justifyContent: "flex-start",
    },
    menuItems: {
        fontSize: responsiveFontSize(menuFonts),
        alignItems : "center"
    },
    iconSubContainer: {
        // backgroundColor: "gray",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
});