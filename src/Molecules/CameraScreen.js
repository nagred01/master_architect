import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider,CameraRoll } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveHeight } from '../../node_modules/react-native-cross-platform-responsive-dimensions';
import IconIos from 'react-native-vector-icons/Ionicons';

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};


export default class CameraScreen extends React.Component {
  state = {
    flash: 'off',
  };


  componentWillMount(){
    console.log("Camera File Call =>")
  }


  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash],
    });
  }

  takePicture = async function() {
    if (this.camera) {
      const data = await this.camera.takePictureAsync();
      console.warn('takePicture ', data.uri);
      CameraRoll.saveToCameraRoll(data.uri,'photo').then(function(result) {
        console.log('save succeeded ' + result);
      }).catch(function(error) {
        console.log('save failed ' + error);
      });;
      //CameraRoll.getPhotos(data.uri, 'photo');
    }
  };

  renderCamera() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
        }}
        flashMode={this.state.flash}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
           <TouchableOpacity  style={styles.flipButton} onPress={()=>{this.props.navigation.navigate("AccountSummary")}}>
             <IconIos name="ios-arrow-round-back" style={{fontSize:40,color:'white'}}></IconIos>
           </TouchableOpacity>
          <TouchableOpacity style={styles.flipButton} onPress={this.toggleFlash.bind(this)}>
            <Text style={styles.flipText}> FLASH: {this.state.flash} </Text>
          </TouchableOpacity>

        </View>


        <View
          style={{
            flex: 0.1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignSelf: 'center',
            top:responsiveHeight(34)
          }}
        >
         <TouchableOpacity onPress={this.takePicture.bind(this)}>
          <Icon name="camera" style={{color: 'white',fontSize:55,}}></Icon>
          </TouchableOpacity>
        </View>
      </RNCamera>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  zoomText: {
    position: 'absolute',
    bottom: 70,
    zIndex: 2,
    left: 2,
  },
});
