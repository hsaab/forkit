import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import cuisineIcon from '../assets/cuisineMGrey.png';
import downIcon from '../assets/fasttrackMGreyDown.png';
import SelectorCuisine from '../components/SelectorCuisine.js';

class ExpandableCuisine extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "test",
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
      const validator = this.props.cuisines.length === 4;
        return (
          <View style={styles.masterContainer}>
            <Animated.View style={[styles.container, {height: this.state.animation}]} >
                <TouchableOpacity style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} onPress={this.toggle.bind(this)}>
                  <View style={styles.button} underlayColor="#f1f1f1">
                    <Image style={styles.buttonImage} source={cuisineIcon} />
                  </View>
                  <View style={styles.title}>
                    <Text style={styles.titleText}>Cuisine</Text>
                  </View>
                  <View style={styles.button} underlayColor="#f1f1f1">
                    {validator ? <Image style={styles.checkImage} source={require('../assets/checkMGrey.png')}/> : null}
                  </View>
                  <Image style={styles.downIcon} source={downIcon} />
                </TouchableOpacity>
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                  <SelectorCuisine fn={this.props.setCuisine}/>
                </View>
            </Animated.View>
          </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cuisines: state.form.cuisines
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setCuisine: (cuisine) => dispatch({type: 'SET_CUISINE', cuisine: cuisine})
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
      width: 36,
      height: 30
    },
    checkImage: {
      width: 35,
      height: 35,
      right: scale(5)
    },
    body: {
      width: scale(375),
      height: verticalScale(350),
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
)(ExpandableCuisine);
