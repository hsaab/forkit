import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import titleIcon from '../assets/titleMGrey.png'

export default class TitleInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
        };
    }

    inputTitle(text) {
      this.setState({
        title: text
      });
      this.props.fn(text);
    }

    render(){
      const textValidator = this.state.title.length >= 1
      return (
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.inputTitle(text)}
            value={this.state.title}
            allowFontScaling={true}
            placeholder={'Enter title'}
            />
        </View>
      );
    }
}

var styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInput: {
      width: scale(325),
      fontSize: moderateScale(30),
      fontFamily: 'Futura',
      fontWeight: '300',
      color: '#646464'
    }
});
