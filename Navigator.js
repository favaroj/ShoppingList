'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator
} from 'react-native';

var Main = require('./main_page.ios');
var CreatePortal = require('./create_portal.ios');
var ListPortal = require('./list_portal.ios');
var WalmartList = require('./WalmartList');
var Produce = require('./Produce');

class AppNavigator extends React.Component{
  constructor(props) {
  super(props);
  }

  render() {
    var initialRouteID = 'Main';
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: initialRouteID}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
			case 'Main':
				return (<Main navigator={navigator} {...route.passProps} route={route} title="Main"/>);
			case 'CreatePortal':
				return (<CreatePortal navigator={navigator} {...route.passProps} route={route} title="Create Portal"/>);
			case 'ListPortal':
				return (<ListPortal navigator={navigator} {...route.passProps} route={route} title="List Portal"/>);
			case 'WalmartList':
				return (<WalmartList navigator={navigator} {...route.passProps} route={route} title="Walmart List"/>);
			case 'Produce':
				return (<Produce navigator={navigator} {...route.passProps} route={route} title='Produce'/>);
		}
  }
}


module.exports = AppNavigator;
