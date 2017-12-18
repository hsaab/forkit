import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput} from 'react-native'; //Step 1
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

class FriendItem extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    invite(ev) {
      ev.preventDefault();
      this.props.inviteFriend(this.props.title);
    }

    render(){
        return (
          <TouchableOpacity onPress={(ev) => this.invite(ev)}>
            <View style={styles.container} >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/DesktopCopy2Black.png')} style={{height: 30, width: 30}}/>
              </View>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>{this.props.title}</Text>
                </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              </View>
            </View>
          </TouchableOpacity>
        );
    }
}

FriendItem.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      inviteFriend: (friend) => dispatch({type: 'INVITE_FRIEND', friend: friend})
    };
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderColor: 'white',
    width: scale(375),
    borderBottomWidth: scale(1),

  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendItem);
