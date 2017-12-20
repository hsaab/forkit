import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: '',
      select: false
  }
}

onClick(value){
  if(value === 0){
    this.setState({
      meal: 'Brunch',
      select: 0
    });
  }
  if(value === 1){
    this.setState({
      meal: 'Lunch',
      select: 1
    });
  }
  if(value === 2){
    this.setState({
      meal: 'Dinner',
      select: 2
    });
  }
}

render() {
  this.props.fn(this.state.meal);
  const radio_props = [
  {label: 'Brunch', value: 0 },
  {label: 'Lunch', value: 1 },
  {label: 'Dinner', value: 2 },
];
    return (
      <View style={styles.container}>
        <RadioForm style={styles.formContainer} formHorizontal={true} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton style={styles.buttonContainer} labelHorizontal={false} key={i} >
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={this.state.select === i}
                onPress={(value) => {this.onClick(value)}}
                borderWidth={1}
                buttonInnerColor={'#FF7F00'}
                buttonOuterColor={'#FF7F00'}
                buttonSize={25}
                buttonOuterSize={40}
                buttonStyle={{}}
                buttonWrapStyle={{}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={false}
                labelStyle={styles.labelStyle}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: scale(360),
    height: verticalScale(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: scale(300),
    height: verticalScale(100),
    justifyContent: 'space-around',
    alignItems: 'center',
    right: scale(5)
  },
  labelStyle: {
    fontSize: 20,
    color: '#646464',
    fontFamily: 'Futura',
    top: verticalScale(8)
  }
});
