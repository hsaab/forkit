import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,Animated} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import MyMap from '../components/MyMap.js';
import locationIcon from '../assets/locationMGrey.png';
import downIcon from '../assets/fasttrackMGreyDown.png';

class ExpandableLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            animation: new Animated.Value(96.5)
        };
    }

    toggle(){
      let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

      this.setState({
          expanded: !this.state.expanded
      });

      this.state.animation.setValue(initialValue);
      Animated.spring(
          this.state.animation,
          {
              toValue: finalValue
          }
      ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render(){
        return (
          <View style={styles.masterContainer}>
            <Animated.View style={[styles.container, {height: this.state.animation}]} >
                <TouchableOpacity style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} onPress={this.toggle.bind(this)}>
                  <View style={styles.button} underlayColor="#f1f1f1">
                    <Image style={styles.buttonImage} source={locationIcon} />
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Location</Text>
                  </View>
                  <View style={styles.button} underlayColor="#f1f1f1">
                    <Image style={styles.checkImage} source={require('../assets/checkMGrey.png')} />
                  </View>
                  <Image style={styles.downIcon} source={downIcon} />
                </TouchableOpacity>
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                  <MyMap/>
                </View>
            </Animated.View>
          </View>
        );
    }
}
export default ExpandableLocation;

var styles = StyleSheet.create({
    masterContainer: {
      width: scale(375),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(3),
      marginBottom: verticalScale(3),
    },
    container: {
      overflow:'hidden',
      width: scale(358),
    },
    title: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    titleContainer: {
      flexDirection: 'row',
      height: verticalScale(96.5),
      width: scale(375),
      backgroundColor: 'rgba(255,255,255,.5)',
      alignItems: 'center',
      },
    titleText: {
      color:'#646464',
      fontWeight:'300',
      fontSize: moderateScale(30),
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonImage: {
      width: 25,
      height: 40
    },
    checkImage: {
      width: 35,
      height: 35,
      right: scale(5)
    },
    body: {
      height: verticalScale(515),
      width: scale(375),
      backgroundColor: 'rgba(255,255,255,.2)'
    },
    downIcon: {
      width: scale(20),
      height: verticalScale(20),
      right: verticalScale(28)
    }
});
