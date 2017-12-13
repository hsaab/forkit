import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarMap from '../components/MinibarMap.js';
import {MapView} from 'expo';

class ListMap extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <MinibarMap/>
        <View style={styles.background}>
          <View>
            <MapView
              style={styles.backgroundColor}
              region={{
                latitude: this.props.location.latitude,
                longitude: this.props.location.longitude,
                latitudeDelta: .05,
                longitudeDelta: .05,
              }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: this.props.location.latitude,
                    longitude: this.props.location.longitude
                  }}
                  pinColor={'#008000'}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: this.props.restaurants.results[1].coordinates.latitude,
                    longitude: this.props.restaurants.results[1].coordinates.longitude
                  }}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: this.props.restaurants.results[2].coordinates.latitude,
                    longitude: this.props.restaurants.results[2].coordinates.longitude
                  }}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: this.props.restaurants.results[0].coordinates.latitude,
                    longitude: this.props.restaurants.results[0].coordinates.longitude
                  }}
                />
              </MapView>
          </View>
        </View>
      </View>
    );
  }
}

ListMap.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      location: state.area,
      restaurants: state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMap);
