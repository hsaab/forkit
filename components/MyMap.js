import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { MapView } from 'expo';
import Geocoder from 'react-native-geocoding';
import GOOG_API_KEY from '../keys.js';
import SelectorDistance from '../components/SelectorDistance.js';

Geocoder.setApiKey(GOOG_API_KEY);

class MyMap extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    lat: 100,
    long: 40,
    latDelta: 50,
    longDelta: 50,
    address: ''
  }
}

getCurrentLocation() {
  navigator.geolocation.getCurrentPosition((success) => {
    this.setState({
      lat: success.coords.latitude,
      long: success.coords.longitude,
      latDelta: 0.04,
      longDelta: 0.04
    })
}, (error) => {
   (console.log('There was an error finding your location!', error))
})
}

getLocation(){
  const address = this.state.address;
  Geocoder.getFromLocation(address)
  .then(json => {
    this.setState({
      lat: json.results[0].geometry.location.lat,
      long: json.results[0].geometry.location.lng,
      latDelta: 0.04,
      longDelta: 0.04
    })
  })
  .catch((e) => {
    console.log('There was an error getting location', e);
  })
}

onRegChange(region){
  this.setState({
    lat: region.latitude,
    long: region.longitude,
    latDelta: region.latitudeDelta,
    longDelta: region.longitudeDelta
  })
}

  render() {
    let coords = {
      lat: this.state.lat,
      long: this.state.long,
      latDelta: .5,
      longDelta: .5
    }
    this.props.setLocation(coords);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.lat,
            longitude: this.state.long,
            latitudeDelta: this.state.latDelta,
            longitudeDelta: this.state.longDelta
        }}
          onRegionChange={(region) => {this.onRegChange(region)}}
          onRegionChangeComplete={(region) => {this.onRegChange(region)}}
          zoomEnabled={true}>
        <MapView.Marker
          coordinate={{
            latitude: this.state.lat,
            longitude: this.state.long
          }}
          pinColor={'red'}
          draggable
          />
        </MapView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Location</Text>
        </View>
        <View style={styles.rowContainer}>
          <TextInput placeholder={'Enter address'} onChangeText={(address) => this.setState({address})} style={styles.textInput}/>
          <TouchableOpacity style={styles.addressButton} onPress={() => {this.getLocation()}}>
            <Text style={styles.addressBtnText}>Go to Address</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.currentButton} onPress={() => {this.getCurrentLocation()}}>
            <Text style={styles.addressBtnText}>Current Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Distance Radius</Text>
        </View>
        <SelectorDistance/>
      </View>
    );
  }
}

MyMap.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setLocation: (coords) => dispatch({type: 'SET_LOCATION', coords: coords})
    };
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  map: {
    width: scale(375),
    height: verticalScale(200),
    marginBottom: 10
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(358)
  },
  textInput: {
    width: scale(175),
    height: verticalScale(50),
    borderBottomWidth: 2,
    borderBottomColor: '#646464',
    margin: 10,
    fontFamily: 'Futura',
    fontWeight: '300',
    color: '#646464',
    fontSize: 18
  },
  addressButton: {
    backgroundColor: 'silver',
    height: verticalScale(50),
    width: scale(120),
    borderRadius: scale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  addressBtnText: {
    fontFamily: 'Futura',
    fontWeight: '200',
    fontSize: 15,
    color: 'white'
  },
  currentButton: {
    width: scale(315),
    height: verticalScale(50),
    backgroundColor: 'rgba(255,127,0,.6)',
    borderRadius: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    width: scale(310),
    marginTop: verticalScale(15),
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#95989A',
    left: scale(13),
  },
  sectionText: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(18)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMap);
