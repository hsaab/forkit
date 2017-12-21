import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput} from 'react-native'; //Step 1
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

class CategoryItem extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
          <View style={styles.container} >
            <View style={styles.categoryContainer}>
              <View style={styles.iconContainer}>
                <Image source={this.props.img} style={styles.icon}/>
              </View>
              <View>
                <Text style={styles.categoryText}>{this.props.type}</Text>
              </View>
            </View>
            <View style={styles.winningContainer}>
              <Text style={styles.winningText}>{this.props.winning}</Text>
            </View>
            <View style={styles.respondedContainer}>
              {this.props.responded.map((result) =>
                  <View style={styles.circle}>
                    <Image style={styles.headShot} source={result}/>
                  </View>
                )}
            </View>
          </View>
        );
    }
}
export default CategoryItem;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomColor: '#A2A2A2',
    width: scale(375),
    borderBottomWidth: scale(1),
  },
  circle: {
    height: verticalScale(30),
    width: scale(30),
    borderRadius: scale(30/2),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headShot: {
    height: verticalScale(30),
    width: scale(30)
  },
  categoryText: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(18)
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  winningContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  respondedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  winningText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(18)
  },
  headShot: {
    height: verticalScale(20),
    width: scale(20)
  },
  guestCircle: {
    height: verticalScale(30),
    width: scale(30),
    borderRadius: scale(15),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  }
});
