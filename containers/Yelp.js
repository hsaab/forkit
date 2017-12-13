import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.js';

class Yelp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navbar hasBack={false} hasBackSingle={true}/>
        <WebView
          source={{uri: this.props.single.singleResult.url}}
          style={{flex: 1}}
        />
      </View>
    );
  }
}

Yelp.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      single: state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Yelp);
