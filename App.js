import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Lightbox, ActionConst } from 'react-native-router-flux';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Register from './containers/Register.js';
import DiscoverHome from './containers/DiscoverHome.js';
import Eats1 from './containers/Eats1.js';
import Eats2 from './containers/Eats2.js';
import Eats3 from './containers/Eats3.js';
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
import Search from './containers/Search.js';
import PersonalData from './containers/PersonalData.js';
import EventForm from './containers/EventForm.js';
import StatusPage from './containers/StatusPage.js';
import TestQuestion from './containers/TestQuestion.js';
import MultiResult from './containers/MultiResult.js';
import Yelp from './containers/Yelp.js';
import OpenTable from './containers/openTable.js';
import menu from './containers/menu.js';
import ForgotPassword from './containers/ForgotPassword.js'


const store = createStore(rootReducer);

export default function App ({}) {
    // console.log(store)
    return (
      <Provider store={store}>
        <Router>
          <Lightbox>
            <Scene key="root">
              {/* <Scene key="home" component={Home} initial={true} hideNavBar={true}/> */}
              <Scene key="login" component={Login} initial={true} hideNavBar={true}/>
              <Scene key="register" component={Register} hideNavBar={true}/>
              <Scene key="eats1" component={Eats1} hideNavBar={true} hideTabBar={true}/>
              <Scene key="eats2" component={Eats2} hideNavBar={true} hideTabBar={true}/>
              <Scene key="eats3" component={Eats3} hideNavBar={true} hideTabBar={true}/>
              <Scene key="algo" component={Algo} hideNavBar={true} hideTabBar={true}/>
              <Scene key='yelp' component={Yelp} hideNavBar={true} hideTabBar={true}/>
              <Scene key='openTable' component={OpenTable} hideNavBar={true} hideTabBar={true}/>
              <Scene key="menu" component={menu} hideNavBar={true} hideTabBar={true}/>
              <Scene key="testquestion" component={TestQuestion} hideNavBar={true} hideTabBar={true}/>
              <Scene key='forgot' component={ForgotPassword} hideNavBar={true} hideTabBar={true}/>
              <Scene tabs={true} lazy={true} animationEnabled={false} tabBarComponent={Tabbar}>
                <Scene key="discover" component={DiscoverHome} hideNavBar={true}/>
                <Scene key="listmap" component={ListMap} hideNavBar={true}/>
                <Scene key="listresults" component={ListResults} hideNavBar={true}/>
                <Scene key="singleresult" component={SingleResult} hideNavBar={true}/>
                <Scene key="profile" component={Profile} hideNavBar={true}/>
                <Scene key="preferences" component={Preferences} hideNavBar={true}/>
                <Scene key="favoritelist" component={FavoriteList} hideNavBar={true}/>
                <Scene key="myforks" component={MyForks} hideNavBar={true}/>
                <Scene key="friendlist" component={FriendList} hideNavBar={true}/>
                <Scene key="personaldata" component={PersonalData} hideNavBar={true}/>
                <Scene key="search" component={Search} hideNavBar={true}/>
                <Scene key="eventform" component={EventForm} hideNavBar={true}/>
                <Scene key="statuspage" component={StatusPage} hideNavBar={true}/>
                <Scene key="multiresult" component={MultiResult} hideNavBar={true}/>
              </Scene>
            </Scene>
            <Scene key="resultlightbox" component={ResultLightbox} hideNavBar={true}/>
          </Lightbox>
        </Router>
      </Provider>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
