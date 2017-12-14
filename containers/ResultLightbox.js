import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import getDirections from 'react-native-google-maps-directions';

class ResultLightbox extends Component {
  handleGetDirections = () => {
      const data = {
         source: {
          latitude: this.props.location.latitude, // our location latitude
          longitude: this.props.location.longitude // our location longitude
        },
        destination: {
          latitude: this.props.destination.singleResult.coordinates.latitude, // latitude of restaurant
          longitude: this.props.destination.singleResult.coordinates.longitude // longitude of restaurants
        },
        params: [
          {
            key: "dirflg",
            value: "w"
          }
        ]
      }

      getDirections(data)
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.transportContainer}>
          <TouchableOpacity style={styles.button} onPress={this.handleGetDirections}>
            <Image style={styles.icon} source={require("../assets/google-maps.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(`https://m.uber.com/ul/?action=setPickup&client_id=MiKDUcSdVp1h38ZYjiK98BpmRSx7jB1w&product_id=26546650-e557-4a7b-86e7-6a3942445247&pickup[latitude]=${this.props.location.latitude}&pickup[longitude]=${this.props.location.longitude}&dropoff[latitude]=${this.props.destination.singleResult.coordinates.latitude}&dropoff[longitude]=${this.props.destination.singleResult.coordinates.longitude}`)}}>
            <Image style={styles.icon} source={require("../assets/uber.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL(`https://lyft.com/ride?id=lyft_line&pickup[latitude]=${this.props.location.latitude}&pickup[longitude]=${this.props.location.longitude}&partner=BfID2Tz9GlS5&destination[latitude]=${this.props.destination.singleResult.coordinates.latitude}&destination[longitude]=${this.props.destination.singleResult.coordinates.longitude}`)}}>
            <Image style={styles.icon} source={require("../assets/lyft.png")}/>
          </TouchableOpacity>
        </View>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={Actions.pop}><Text style={styles.textStyle}>Close</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

ResultLightbox.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      destination: state.results,
      location: state.area
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: verticalScale(490),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00042E',
    display: 'flex'
  },
  transportContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  closeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(5)
  },
  textStyle: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white',
    fontWeight: 'bold'
  },
  icon: {
    borderRadius: 20,
    height: verticalScale(100),
    width: scale(100)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultLightbox);
