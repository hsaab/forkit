import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

const Home = ({}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.login}>
          <Image style={styles.logo} source={require("../assets/DesktopCopy3trans.png")}/>
        </TouchableOpacity>
      </View>
    );
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192F4A",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: verticalScale(175),
    width: scale(250)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
