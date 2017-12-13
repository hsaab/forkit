import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

class FriendList extends Component {
  componentDidMount() {
    console.log('Hello from friend list');
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.followBar}>
            <TouchableOpacity style={styles.followers}>
              <Text>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.following}>
              <Text>Following</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.friendsContainer}>
            <View style={styles.listItem}>
              <View style={styles.friendPic} >
                <Image style={{height: verticalScale(50), width: scale(50), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <TouchableOpacity style={styles.friendName}>
                <View>
                  <Text>Friend Name Click them to go to their profile</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <View style={styles.friendPic} >
                <Image style={{height: verticalScale(50), width: scale(50), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <TouchableOpacity style={styles.friendName}>
                <View>
                  <Text>Friend Name</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <View style={styles.friendPic} >
                <Image style={{height: verticalScale(50), width: scale(50), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <TouchableOpacity style={styles.friendName}>
                <View>
                  <Text>Friend Name</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <View style={styles.friendPic} >
                <Image style={{height: verticalScale(50), width: scale(50), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <TouchableOpacity style={styles.friendName}>
                <View>
                  <Text>Friend Name</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <View style={styles.friendPic} >
                <Image style={{height: verticalScale(50), width: scale(50), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <TouchableOpacity style={styles.friendName}>
                <View>
                  <Text>Friend Name</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <View style={styles.friendPic} >
                <Image style={{height: verticalScale(50), width: scale(50), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <TouchableOpacity style={styles.friendName}>
                <View>
                  <Text>Friend Name</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

FriendList.propTypes = {
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
  followBar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375)
  },
  followers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  following: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  friendsContainer: {
    flex: 6,
  },
  listItem: {
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  friendPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  friendName: {
    flex: 2,
    justifyContent: 'center'
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendList);
