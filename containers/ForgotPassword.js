import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { Font } from 'expo';
import axios from 'axios';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  sendRequest(ev) {
    ev.preventDefault();

    axios.get(`https://guarded-dawn-44803.herokuapp.com/recover/email?email=${this.state.email}`)
    .then((resp) => {
      if (resp.data.success === true) {
        Alert.alert('We have sent a password reset email to ', this.state.email);
        Actions.login();
      } else {
        Alert.alert('There is no user with that email in our database');
      }
    })
    .catch((err) => {
      console.log('Password Request Error is ', err);
    });
  }

  render() {
    return (
      <LinearGradient colors={['#303F4C', '#3B4955', '#AFAFAF']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style={styles.container}>
          <View style={styles.inputForm}>
            <Text>Please enter your account's email address</Text>
            <View style={styles.input}>
              <Image style={styles.userIcon} source={require("../assets/username.png")}/>
              <TextInput style={styles.inputText} placeholder={'Email'} onChangeText={(text) => this.setState({email: text})}/>
            </View>
          </View>
          <View style={styles.buttonForm}>
            <TouchableOpacity style={styles.loginButton} onPress={(ev) => {this.sendRequest(ev)}}>
              <Text style={styles.loginText}> SEND REQUEST </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signUp} onPress={Actions.login}>
            <Text style={styles.signUpText}>Return to Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: verticalScale(400),
    width: scale(300),
    bottom: verticalScale(100)
  },
  logotext: {
    height: verticalScale(175),
    width: scale(250)
  },
  inputForm: {
    height: verticalScale(130),
    width: scale(300),
    justifyContent: 'space-around'
  },
  userIcon: {
    height: verticalScale(20),
    width: scale(20),
    left: scale(8)
  },
  passIcon: {
    height: verticalScale(25),
    width: scale(25),
    left: scale(5)
  },
  input: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20
  },
  inputText: {
    position: 'absolute',
    fontFamily: 'Futura',
    fontSize: moderateScale(15),
    color: 'grey',
    left: scale(30)
  },
  forgetText: {
    fontSize: moderateScale(12),
    top: verticalScale(2),
    alignSelf: 'flex-end',
    color: 'white'
  },
  buttonForm: {
    top: verticalScale(40),
    height: verticalScale(125),
    width: scale(300),
    justifyContent: 'space-around'
  },
  loginButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#192F4A',
    justifyContent: 'center',
    borderRadius: 20
  },
  loginText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  },
  fbButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#425BB4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  fbIcon: {
    height: verticalScale(20),
    width: scale(20),
    right: scale(12)
  },
  fbText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  },
  signUp: {
    top: verticalScale(100),
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    alignSelf: 'center',
    color: 'white'
  }
});

export default ForgotPassword
