import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';

class FriendItem extends Component{
    constructor(props){
        super(props);
        this.state = {
          showSelected: false
        };
    }

    invite() {
      this.setState({
        selected: true
      })
      this.props.inviteFriend({name: this.props.title, number: this.props.number, id: this.props.id});
    }

    uninvite() {
      this.setState({
        selected: false
      })
      this.props.uninviteFriend({name: this.props.title, number: this.props.number, id: this.props.id});
    }

    selected() {
      return (
        <TouchableOpacity onPress={() => this.uninvite()} style={styles.container}>
          <View style={styles.rowContainer}>
            <Image source={this.props.img} style={styles.headshot}/>
            <Text style={styles.name}>{this.props.title}</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/CubeLogoMGrey.png')} style={styles.cubeSelect}/>
          </View>
        </TouchableOpacity>
      )
    }

    unSelected() {
      return (
        <TouchableOpacity onPress={() => this.invite()} style={styles.container}>
          <View style={styles.rowContainer}>
            <Image source={this.props.img} style={styles.headshot}/>
            <Text style={styles.name}>{this.props.title}</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          </View>
        </TouchableOpacity>
      )
    }

    render(){
        return (
          <View>
            {this.state.selected ? this.selected() : this.unSelected()}
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      inviteFriend: (friend) => dispatch({type: 'INVITE_FRIEND', friend: friend}),
      uninviteFriend: (friend) => dispatch({type: 'UNINVITE_FRIEND', friend: friend})
    };
};

var styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderColor: '#ACACAC',
    width: scale(375),
    borderBottomWidth: moderateScale(0.5),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    marginLeft: scale(15)
  },
  name: {
    color: '#646464',
    fontFamily: 'Futura',
    fontSize: moderateScale(18),
    textAlign: 'left',
    left: scale(30)
  },
  headshot: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  },
  cubeSelect: {
    height: verticalScale(20),
    width: scale(20),
    overflow: 'visible'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendItem);
