import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput} from 'react-native'; //Step 1
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import StarRating from 'react-native-star-rating';

class FriendItem extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render(){
        return (
            <View style={styles.container} >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/DesktopCopy2Black.png')} style={{height: 30, width: 30}}/>
              </View>
              <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{this.props.title}</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <StarRating
                  disabled={false}
                  maxStars={1}
                  rating={0}
                  starSize={40}
                  starColor={'#ddd3dc'}
                  emptyStarColor={'#ddd3dc'}
                />
              </View>
            </View>
        );
    }
}
export default FriendItem;

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
