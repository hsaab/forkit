import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';

export default class MyEventBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    const aOn = this.props.title === "Ongoing" || this.props.title === "Facts"
    const bOn = this.props.title === "Planned" || this.props.title === "Friends"

    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => this.props.aLink()}>
            {aOn ? <Image style={styles.circle} source={require("../assets/circleSelectA.png")}/>
          : <Image style={styles.unselectCircle} source={require("../assets/circleUnselectA.png")}/>}
          </TouchableOpacity>
            {aOn ? <Image style={styles.point} source={require("../assets/subMenuTriGrey.png")}/>
          : null}
        </View>
        <Text style={styles.minibarText}>{this.props.title}</Text>
        <TouchableOpacity style={styles.subContainer} onPress={() => this.props.bLink()}>
            {bOn ? <Image style={styles.circle} source={require("../assets/circleSelectB.png")}/>
          : <Image style={styles.unselectCircle} source={require("../assets/circleUnselectB.png")}/>}
            {bOn ? <Image style={styles.point} source={require("../assets/subMenuTriGrey.png")}/>
          : null}
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    width: scale(375),
    backgroundColor: "#646464",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: scale(45),
    height: verticalScale(45),
    top: verticalScale(8),
  },
  unselectCircle: {
    width: scale(45),
    height: verticalScale(45),
  },
  minibarText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(26),
    textAlign: 'center'
  },
  point: {
    width: scale(20),
    height: verticalScale(14),
    top: verticalScale(10)
  }
});
