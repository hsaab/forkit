import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../components/Navbar.js';
import FriendItem from '../components/FriendItem.js';
import FormBar from '../components/FormBar.js';

class InviteFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: "A", data: ["apple", "artichoke"]},
        {title: "B", data: ["banana", "bacon"]},
        {title: "C", data: ["cookie", "cheese", "chocolate", "curry", "cake"]},
        {title: "D", data: ["doritos"]},
        {title: "E", data: ["eggs"]},
        {title: "F", data: ["falafel", "fudge"]},
        {title: "G", data: ["gouda", "gyro"]},
        {title: "H", data: ["hot dog", "hero"]},
        {title: "I", data: ["ice cream"]},
      ],
      FoF: true
    }
  }

  fofToggle(){
    const opposite = !this.state.FoF;
    this.setState({
      FoF: opposite
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FormBar title={"Friends"} aLink={() => Actions.eventform()} bLink={() => Actions.invitefriends()}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <View style={styles.createContainer}>
            <TouchableOpacity style={styles.optionContainer} onPress={() => {this.fofToggle()}}>
              <Image style={styles.group} source={require("../assets/groupMGrey.png")}/>
              {this.state.FoF ? <Text>+1s ON </Text> : <Text>+1s OFF </Text>}
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer}>
              <Text>Friends O Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.statuspage} style={styles.optionContainer}>
              <Text>Create Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TextInput style={styles.search} placeholder={'Search'}/>
          </View>
          <View style={styles.listContainer}>
            {/* <AlphabetListView
              data={this.state.data}
              cell={FriendItem}
              cellHeight={100}
              sectionHeaderHeight={22.5}
            /> */}
            {/* <FriendItem/>
            <FriendItem/>
            <FriendItem/> */}
            <SectionList
              renderItem={({item}) => <FriendItem title={item}/>}
              renderSectionHeader={({section}) => <Text>{section.title}</Text>}
              sections={this.state.data}
            />
          </View>
        </View>
      </View>
    );
  }
}

InviteFriends.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: '100%',
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-50),
    width: scale(375)
  },
  headerContainer: {
    flex: 1,
    borderColor: '#fff',
    borderBottomWidth: scale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  createContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  searchContainer: {
    flex: 1,
    width: scale(375),
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    flex: 5
  },
  search: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
    width: scale(250)
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%'
  },
  group: {
    height: verticalScale(45),
    width: scale(45),
    overflow: 'visible'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);
