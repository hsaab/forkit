import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import titleIcon from '../assets/titleMGrey.png'

class ExpandableTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            expanded: false,
            animation: new Animated.Value(84)
        };
    }

    toggle(){
      let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

      this.setState({
          expanded : !this.state.expanded
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
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    render(){
      const textValidator = this.state.title.length > 1 && typeof(this.state.title) !== 'undefined'
      return (
          <Animated.View style={[styles.container, {height: this.state.animation}]} >
              <TouchableOpacity style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} onPress={this.toggle.bind(this)}>
                <View
                    style={styles.button}
                    underlayColor="#f1f1f1">
                    <Image
                        style={styles.buttonImage}
                        source={titleIcon}
                    ></Image>
                </View>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Title</Text>
                  </View>
                  <View style={styles.button} underlayColor="#f1f1f1">
                    {textValidator ? <Image style={styles.checkImage} source={require('../assets/checkMGrey.png')} /> : null}
                  </View>
              </TouchableOpacity>

              <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                <View style={styles.rowContainer}>
                  <Image style={styles.miniImage} source={titleIcon} />
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    allowFontScaling={true}
                    placeholder={'Enter title'}
                    />
                </View>
              </View>

          </Animated.View>
      );
    }
}
export default ExpandableTitle;

var styles = StyleSheet.create({
    container: {
      borderColor: '#fff',
      borderBottomWidth: scale(1),
      overflow:'hidden',
    },
    titleContainer: {
      flexDirection: 'row',
      borderColor: '#A2A2A2',
      borderBottomWidth: moderateScale(0.7),
      height: verticalScale(84)
    },
    title: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'flex-start'
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
      width: scale(35),
      height: verticalScale(25)
    },
    checkImage: {
      width: scale(35),
      height: verticalScale(35)
    },
    body: {
      padding: 10,
      paddingTop: 0,
      height: verticalScale(75),
      width: scale(375),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    textInput: {
      width: scale(300),
      fontSize: moderateScale(30),
      fontFamily: 'Futura',
      fontWeight: '300',
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
      color: '#646464'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    miniImage: {
      width: scale(28),
      height: verticalScale(20),
      right: scale(15)
    }
});
