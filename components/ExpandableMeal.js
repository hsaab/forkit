import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import SelectorMeal from '../components/SelectorMeal.js';
import downIcon from '../assets/fasttrackMGreyDown.png';
import mealIcon from '../assets/mealMGrey.png';

class ExpandableMeal extends Component{
    constructor(props){
        super(props);
        this.state = {
            meal: "",
            expanded: false,
            animation: new Animated.Value(96.5)
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
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render(){
      const validator = this.props.meal.length >= 2;
      console.log(validator, this.props.meal)
      return (
        <View style={styles.masterContainer}>
          <Animated.View style={[styles.container, {height: this.state.animation}]} >
              <TouchableOpacity style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} onPress={this.toggle.bind(this)}>
                <View style={styles.button} underlayColor="#f1f1f1">
                  <Image style={styles.buttonImage} source={mealIcon} />
                </View>
                <View style={styles.title}>
                  <Text style={styles.titleText}>Meal</Text>
                </View>
                <View style={styles.button} underlayColor="#f1f1f1">
                  {validator ? <Image style={styles.checkImage} source={require('../assets/checkMGrey.png')}/> : null}
                </View>
                <Image style={styles.downIcon} source={downIcon} />
              </TouchableOpacity>
              <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                <SelectorMeal fn={this.props.selectMeal}/>
              </View>
          </Animated.View>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      meal: state.form.meal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      selectMeal: (meal) => dispatch({type: 'CHOOSE_MEAL', meal: meal})
    };
};

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
      width: scale(35),
      height: verticalScale(35)
    },
    checkImage: {
      width: scale(35),
      height: verticalScale(35),
      right: scale(5)
    },
    body: {
      height: verticalScale(100),
      width: scale(375),
      borderBottomWidth: 0.5,
      borderColor: 'gray',
      backgroundColor: 'rgba(255,255,255,.2)',
    },
    downIcon: {
      width: scale(20),
      height: verticalScale(20),
      right: verticalScale(28)
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpandableMeal);
