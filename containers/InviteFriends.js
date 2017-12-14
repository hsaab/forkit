import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import FriendItem from '../components/FriendItem.js';
import MyEventBar from '../components/MyEventBar.js';

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
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <MyEventBar title={"Friends"} aLink={() => Actions.eventform()} bLink={() => Actions.invitefriends()}/>
          <View style={styles.createContainer}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Friends O Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.statuspage} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
    console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
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
    width: 250
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);
