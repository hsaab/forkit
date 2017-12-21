import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore.js';
import rootReducer from './reducers/index';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Lightbox, ActionConst, Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Register from './containers/Register.js';
import DiscoverHome from './containers/DiscoverHome.js';
import Eats1 from './containers/Eats1.js';
import Eats1Multi from './containers/Eats1Multi.js';
import Eats2 from './containers/Eats2.js';
import Eats2Multi from './containers/Eats2Multi.js';
import Eats3 from './containers/Eats3.js';
import Eats4 from './containers/Eats4.js';
import Algo from './containers/Algo.js';
import ListResults from './containers/ListResults.js';
import ListMap from './containers/ListMap.js';
import SingleResult from './containers/SingleResult.js';
import ResultLightbox from './containers/ResultLightbox.js';
import Tabbar from './components/Tabbar.js';
import Profile from './containers/Profile.js';
import Preferences from './containers/Preferences.js';
import FavoriteList from './containers/FavoriteList.js';
import MyForks from './containers/MyForks.js';
import FriendList from './containers/FriendList.js';
import PersonalData from './containers/PersonalData.js';
import EventForm from './containers/EventForm.js';
import StatusPage from './containers/StatusPage.js';
import TestQuestion from './containers/TestQuestion.js';
import MultiResult from './containers/MultiResult.js';
import Yelp from './containers/Yelp.js';
import OpenTable from './containers/openTable.js';
import menu from './containers/menu.js';
import ForgotPassword from './containers/ForgotPassword.js'
import InviteFriends from './containers/InviteFriends.js';
import MyEventBar from './components/MyEventBar.js';
import MyEvents from './containers/MyEvents.js';
import MyEvents2 from './containers/MyEvents2.js';
import MyEvents3 from './containers/MyEvents3.js';
import verifyNumber from './containers/verifyNumber.js';
import MinibarResults from './components/MinibarResults.js';
import FormBar from './components/FormBar.js';
import MultiLastResult from './containers/MultiLastResult.js'
import Newsfeed from './containers/Newsfeed.js';
import Search from './containers/Search.js';

EStyleSheet.build();

const Scenes = Actions.create(
        <Lightbox>
          <Scene key="root">
            {/* <Scene key="home" component={Home} initial={true} hideNavBar={true}/> */}
            <Scene key="login" component={Login} initial={true} hideNavBar={true} lazy={true} />
            <Scene key="register" component={Register} hideNavBar={true} lazy={true} />
            <Scene key="eats1" component={Eats1} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key="eats1multi" component={Eats1Multi} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key="eats2" component={Eats2} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key="eats2multi" component={Eats2Multi} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key="eats3" component={Eats3} hideNavBar={true} hideTabBar={true} lazy={true} lazy={true} />
            <Scene key="eats4" component={Eats4} hideNavBar={true} hideTabBar={true} lazy={true} lazy={true} />
            <Scene key="algo" component={Algo} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key='yelp' component={Yelp} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key='openTable' component={OpenTable} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key="menu" component={menu} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key="testquestion" component={TestQuestion} hideNavBar={true} hideTabBar={true} lazy={true} />
            <Scene key='forgot' component={ForgotPassword} hideNavBar={true} hideTabBar={true} lazy={true}/>
            <Scene key='vnumber' component={verifyNumber} hideNavBar={true} hideTabBar={true} lazy={true}/>
            <Scene key="root2" tabs={true} lazy={true} animationEnabled={false} tabBarComponent={Tabbar} lazy={true}>
              <Scene key="discover" component={DiscoverHome} hideNavBar={true} lazy={true}/>
              <Scene key="newsfeed" component={Newsfeed} hideNavBar={true} lazy={true}/>
              <Scene key="singleresult" component={SingleResult} hideNavBar={true} lazy={true}/>
              <Scene key="multilastresult" component={MultiLastResult} hideNavBar={true} lazy={true}/>
              <Scene key="profile" component={Profile} hideNavBar={true} lazy={true}/>
              <Scene key="preferences" component={Preferences} hideNavBar={true} lazy={true}/>
              <Scene key="favoritelist" component={FavoriteList} hideNavBar={true} lazy={true}/>
              <Scene key="myforks" component={MyForks} hideNavBar={true} lazy={true}/>
              <Scene key="friendlist" component={FriendList} hideNavBar={true} lazy={true}/>
              <Scene key="personaldata" component={PersonalData} hideNavBar={true} lazy={true}/>
              <Scene key="statuspage" component={StatusPage} hideNavBar={true} lazy={true}/>
              <Scene key="multiresult" component={MultiResult} hideNavBar={true} lazy={true}/>
              <Scene key="listresults" component={ListResults} hideNavBar={true} lazy={true}/>
              <Scene key="listmap" component={ListMap} hideNavBar={true} lazy={true}/>
              <Scene key="eventform" component={EventForm} hideNavBar={true}/>
              <Scene key="invitefriends" component={InviteFriends} hideNavBar={true}/>
              <Scene key="myevents" component={MyEvents} hideNavBar={true}/>
              <Scene key="myevents2" component={MyEvents2} hideNavBar={true}/>
              <Scene key="myevents3" component={MyEvents3} hideNavBar={true}/>
              <Scene key="search" component={MyEvents3} hideNavBar={true}/>
            </Scene>
          </Scene>
          <Scene key="resultlightbox" component={ResultLightbox} hideNavBar={true}/>
        </Lightbox>
);

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={Scenes}/>
      </Provider>
    )
  }
}
