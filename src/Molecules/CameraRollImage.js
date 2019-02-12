import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView, Image, Button, CameraRoll, Text, Dimensions } from 'react-native';
import IconIos from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from '../../node_modules/react-native-cross-platform-responsive-dimensions';

const { width } = Dimensions.get('window')

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            loading: true,
        }
    }

    componentWillMount() {
        console.log("Camera Roll Image Call =>");
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        }).then(r => {
            console.log("Photo Image =>" + r);
            this.setState({ photos: r.edges });
        }).catch((err) => {
            console.log("Photo Image Error=>" + err);
        });
    }

    componentDidMount() {
        this.setState({ loading: false });
    }



    render() {
        return (
            <View>
                <View style={{backgroundColor:'white',height:responsiveHeight(10)}}>
                    <TouchableOpacity style={{top:responsiveHeight(3),marginLeft:responsiveWidth(2)}}  onPress={() => { this.props.navigation.navigate("AccountSummary") }}>
                        <IconIos name="ios-arrow-round-back" style={{ fontSize: 40, color: 'black' }}></IconIos>
                    </TouchableOpacity>
                </View>
                
                <ScrollView
                    contentContainerStyle={styles.scrollView}>
                    {
                        this.state.photos.map((p, i) => {
                            return (
                                <TouchableHighlight
                                    style={{ opacity: i === this.state.index ? 0.5 : 1 }}
                                    key={i}
                                    underlayColor='transparent'
                                    onPress={() => this.setIndex(i)}
                                >
                                    <Image
                                        style={{
                                            width: width / 3,
                                            height: width / 3
                                        }}
                                        source={{ uri: p.node.image.uri }}
                                    />
                                </TouchableHighlight>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }



}
styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        paddingTop: 20,
        flex: 1
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
})