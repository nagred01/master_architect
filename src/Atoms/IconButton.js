import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveFontSize } from 'react-native-cross-platform-responsive-dimensions';
import AppSettings from '../Settings/AppSettings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export class IconButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isDisabled = this.props.isButtonDisabled ? true : false;
        let iconType = this.props.iconType
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.action}>
                    <View style={{ justifyContent : "center",alignItems:"center"}}>
                        {
                            iconType == "Ionicons" &&
                            <Ionicons name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}
                                color={this.props.color} />
                        }
                        {
                            iconType == "Feather" &&
                            <Feather name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}
                                color={this.props.color} />
                        }

                        {
                            iconType == "EvilIcons" &&
                            <EvilIcons name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}
                                color={this.props.color} />
                        }

                        {
                            iconType == "Foundation" &&
                            <Foundation name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}
                                color={this.props.color} />
                        }
                        {
                            iconType == "Entypo" &&
                            <Entypo name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}responsiveFontSize
                                color={this.props.color} />
                        }
                        {
                            iconType == "FontAwesome" &&
                            <Icon name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}
                                color={this.props.color} />
                        }
                        {
                            iconType == "MaterialCommunityIcons" &&
                            <MaterialCommunityIcons name={this.props.iconName}
                                size={responsiveHeight(this.props.iconSize)}
                                color={this.props.color} />
                        }

                    </View>
                     {
                         this.props.label && 
                         <View>
                        <Text style={{ textAlign:"left", fontSize: responsiveFontSize(1.5) }}>{this.props.label}
                        </Text>
                        </View>
                     }
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IconButton