import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import axios from 'axios';

class MultiResult extends Component{
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleResult() {
    axios.get(`http://localhost:3000/yelp/multiyelp?meal=${this.props.final.meal}&date=${this.props.final.date}&group=${this.props.final.group_id}&host=${this.props.final.host_id}&radius=${this.props.final.radius}&latitude=${this.props.status.location.latitude}&longitude=${this.props.status.location.longitude}&price=${this.props.final.price}`)
    .then(response => {
      if (response.data.success) {
        console.log(response.data.restaurant);
        this.props.finalDecision(response.data.restaurant);
        axios({
          method: 'POST',
          url: 'http://localhost:3000/db/101_super_duper_secret_101',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            password: '$BIG_SHAQ101$',
            type: 'search',
            query: `update group_event set yelp_id = '${response.data.restaurant.id}' where id = '${this.props.status.group_id}'`
          }
        })
        Actions.singleresult();
      }
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <TouchableOpacity onPress={() => this.handleResult()}><Text>Result</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

MultiResult.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      final: state.finalMulti,
      status: state.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      finalDecision: (result) => dispatch({type: 'SINGLE_RESULT', result: result})
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiResult);
