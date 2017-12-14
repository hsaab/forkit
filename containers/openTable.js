import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.js';
import PropTypes from 'prop-types';
var axios = require('axios');

class OpenTable extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navbar hasBack={false} hasBackSingle={true}/>
        <WebView
          source={{uri: this.props.open.url}}
          style={{flex: 1}}
        />
      </View>
    );
  }
}

OpenTable.propTypes = {
};

const mapStateToProps = (state) => {
    return {
      single: state.results,
      open: state.openTable
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpenTable);
