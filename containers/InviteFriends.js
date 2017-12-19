import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../components/Navbar.js';
import FriendItem from '../components/FriendItem.js';
import FormBar from '../components/FormBar.js';
import axios from 'axios';

class InviteFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: "B", data: [{name: "Brandon Eng", number: "+17322997997", id: 23}]},
        {title: "H", data: [{name: "Hassan Saab", number: "+13109442125", id: 21}]},
        {title: "P", data: [{name: "Paul Jin", number: "+16502695502", id: 20}]},
        {title: "V", data: [{name: "Vasish Baungally", number: "+13127098951", id: 22}]},
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

  handleCreate() {
    var dates = [];
    for (var i = 0; i < this.props.eventData.dates.length; i++) {
      dates.push(this.props.eventData.dates[i].dateString)
    }

    var participants_id = [];
    for (var j = 0; j < this.props.friends.friends.length; j++) {
      participants_id.push(this.props.friends.friends[j].id)
    }

    var cuisinesChosen = [];
    for (var k = 0; k < this.props.eventData.cuisines.length; k++) {
      cuisinesChosen.push(this.props.eventData.cuisines[k].label)
    }


    var group_event = {id: Date.now().toString(), title: this.props.eventData.title, dates: dates.toString(), meal_type: this.props.eventData.meal, location: {latitude: this.props.eventData.coords.lat, longitude: this.props.eventData.coords.long}, radius: this.props.eventData.distance, host_id: this.props.user.id, participants_id: participants_id.toString(), restaurant_chosen: false, cuisines: cuisinesChosen.toString()}

    // console.log('EVENT DATA IS HERE', this.props.eventData);
    // console.log('FRIENDS DATA IS HERE', this.props.friends)
    console.log('GROUP EVENT', group_event);

    axios({
      method: 'POST',
      url: 'http://localhost:3000/db/101_super_duper_secret_101',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        password: '$BIG_SHAQ101$',
        type: 'search',
        query: `insert into group_event(id, title, dates, meal_type, location, radius, host_id, participants_id, restaurant_chosen, cuisines) values ('${group_event.id}', '${group_event.title}', '${group_event.dates}', '${group_event.meal_type}', '${JSON.stringify(group_event.location)}','${group_event.radius}', ${group_event.host_id},'${group_event.participants_id}', true, '${group_event.cuisines}')`
      }
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(e => {
      console.log(e);
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
            <TouchableOpacity onPress={() => this.handleCreate()} style={styles.optionContainer}>
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
              renderItem={({item}) => <FriendItem title={item.name} number={item.number} id={item.id}/>}
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
      eventData: state.form,
      friends: state.friend,
      user: state.user
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
