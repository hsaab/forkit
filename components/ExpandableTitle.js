import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import downIcon from '../assets/fasttrackMGreyDown.png';
import titleIcon from '../assets/titleMGrey.png';
import TitleInput from '../components/TitleInput.js';

class ExpandableTitle extends Component{
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
      const textValidator = this.props.title.length >= 1
      return (
        <View style={styles.masterContainer}>
          <Animated.View style={[styles.container, {height: this.state.animation}]} >
              <TouchableOpacity style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} onPress={this.toggle.bind(this)}>
                <View style={styles.button} underlayColor="#f1f1f1">
                  <Image style={styles.buttonImage} source={titleIcon} />
                </View>
                <View style={styles.title}>
                  <Text style={styles.titleText}>Title</Text>
                </View>
                <View style={styles.button} underlayColor="#f1f1f1">
                  {textValidator ? <Image style={styles.checkImage} source={require('../assets/checkMGrey.png')} /> : null}
                </View>
                <Image style={styles.downIcon} source={downIcon} />
              </TouchableOpacity>
              <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                <TitleInput fn={this.props.titleChange}/>
              </View>
          </Animated.View>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      title: state.form.title
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      titleChange: (title) => dispatch({type: 'TITLE_CHANGE', title: title})
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
    titleContainer: {
      flexDirection: 'row',
      height: verticalScale(96.5),
      width: scale(375),
      backgroundColor: 'rgba(255,255,255,.5)',
      alignItems: 'center',
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
      height: verticalScale(75),
      width: scale(375),
      backgroundColor: 'rgba(255,255,255,.2)',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: 'gray',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
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
)(ExpandableTitle);
