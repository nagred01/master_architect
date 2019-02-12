import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-cross-platform-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppSettings from '../Settings/AppSettings';

class LinkFieldWithIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let heading = this.props.heading;
        let url = this.props.url;
        let action = this.props.onPressAction;
        let linkStyle = this.props.linkStyle ? this.props.linkStyle : {};
        let containerStyle = this.props.containerStyle ? this.props.containerStyle : {};
        let iconName = this.props.iconName;
        let fontSize = this.props.fontSize;
        let color = this.props.color;
        let subContainer = this.props.subContainerStyle ? this.props.subContainerStyle : {};

        return (
            <View style={[styles.container, containerStyle]}>
                <TouchableOpacity onPress={action}>
                    <View style={[styles.subContainer, subContainer]}>
                        <Text style={[styles.link, linkStyle]}>
                            {heading}
                        </Text>
                        { iconName &&
                        <Icon
                            name={iconName}
                            size={fontSize}
                            color={color}
                        />
                        }

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const LinkColor = AppSettings.linkColor;
const LinkSize = AppSettings.linkSize;
// const FontFamily = AppSettings.fontFamily;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    link: {
        color: LinkColor,
        fontSize: responsiveFontSize(LinkSize),
        // fontFamily: FontFamily,
        marginRight: responsiveHeight(1.1)
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    }
});

export default LinkFieldWithIcon