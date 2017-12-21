import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import RightButton from '../assets/fasttrackGrey.png';
import profileIcon from '../assets/profile.png';
import heartIcon from '../assets/heart.png';
import planeIcon from '../assets/plane.png';
import commentIcon from '../assets/comment.png';
import EStyleSheet from 'react-native-extended-stylesheet';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
          show: true
        };
    }

    render() {
      return (
        <TouchableOpacity style={styles.background}>
          <View style={styles.rowContainer1}>
            <View style={styles.rowContainer}>
              <Text style={styles.hostText}>H</Text>
              <View style={styles.colContainer}>
                <Image style={styles.hostHeadShot} source={this.props.hostPic}/>
                <Text style={styles.lightText}>{this.props.hostFirst}</Text>
              </View>
            </View>
            <Text style={styles.descText}>is at {this.props.meal} with</Text>
            <Text style={styles.guestText}>G</Text>
            <View style={styles.rowContainer}>

              <View style={styles.colContainer}>
                <View style={styles.rowPicContainer}>
                  <Image style={styles.headShot} source={this.props.guestPic1}/>
                  <Image style={styles.headShot} source={this.props.guestPic2}/>
                  <Image style={styles.headShot} source={this.props.guestPic3}/>
                </View>
                <Text style={styles.lightText}>{this.props.guest1}, {this.props.guest2}</Text>
                <Text style={styles.lightText}>{this.props.guest3} + 1 more</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowContainer2}>
            <View style={styles.colTextContainer}>
              <Text style={styles.titleText}>{this.props.title}</Text>
              <Text style={styles.subText}>{this.props.desc}</Text>
            </View>
            <View style={styles.rowIconContainer}>
              <Image style={styles.icon} source={heartIcon}/>
              <Image style={styles.icon} source={commentIcon}/>
              <Image style={styles.icon} source={planeIcon}/>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

var styles = EStyleSheet.create({
  background: {
    height: verticalScale(164),
    width: scale(350),
    backgroundColor: '#F8F8F8',
    marginTop: verticalScale(15),
    padding: moderateScale(20)
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: verticalScale(4)
  },
  rowIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '30%'
  },
  rowPicContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(5)
  },
  rowContainer1: {
    flexDirection: 'row',
    height: '60%',
    justifyContent: 'space-around'
  },
  headShot: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  },
  hostHeadShot: {
    height: verticalScale(30),
    width: scale(30),
    marginBottom: verticalScale(5),
    overflow: 'visible'
  },
  hostText: {
    color: '#8D8D8D',
    fontSize: moderateScale(13),
    right: scale(5),
    top: scale(8),
  },
  guestText: {
    color: '#8D8D8D',
    fontSize: moderateScale(13),
    top: verticalScale(5),
    left: scale(3)
  },
  colContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  lightText: {
    fontSize: moderateScale(13),
    fontFamily: 'Futura',
    color: '#646464'
  },
  descText: {
    fontSize: moderateScale(17),
    fontFamily: 'Futura',
    color: '#646464'
  },
  rowContainer2: {
    flexDirection: 'row',
    height: '40%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colTextContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  titleText: {
    fontSize: moderateScale(19),
    fontFamily: 'Futura',
    color: '#646464',
    fontStyle: 'italic'
  },
  subText: {
    fontSize: moderateScale(14),
    fontFamily: 'Futura',
    color: '#646464',
    left: scale(2),
    top: verticalScale(5)
  },
  icon: {
    height: verticalScale(25),
    width: scale(25),
    overflow: 'visible',
    marginLeft: scale(10)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
