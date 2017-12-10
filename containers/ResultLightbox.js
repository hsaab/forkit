import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

const ResultLightbox = ({}) => {
    return (
      <View style={styles.container}>
        <View style={styles.transportContainer}>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.icon} source={require("../assets/google-maps.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.icon} source={require("../assets/uber.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.icon} source={require("../assets/lyft.png")}/>
          </TouchableOpacity>
        </View>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={Actions.pop}><Text style={styles.textStyle}>Close</Text></TouchableOpacity>
        </View>
      </View>
    );
}

ResultLightbox.propTypes = {
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
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
