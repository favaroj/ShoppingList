<<<<<<< 0fba93b5d10533bf5b2b3a554b280ceaa123ef62
=======
'use strict';

//import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
var React = require('react');
var ReactNative = require('react-native');
var MainPage = require('./main_page.ios');
var CreatePortal = require('./create_portal.ios');
var ListPortal = require('./list_portal.ios');
var Navigation = require('./Navigator');
import FirebaseConfig from './firebase_config';

class ShoppingListApp extends React.Component {
	constructor(props) {
		super(props);
		FirebaseConfig.initialize();
	}

  render() {

    return (
			<Navigation></Navigation>
    );
  }//End renderScene
}

var styles = ReactNative.StyleSheet.create({
	description: {
		marginTop: 40,
		marginBottom: 10,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	header: {
		marginTop: 10,
		marginBottom: 60,
		fontSize: 30,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	container1: {
		flexDirection: 'row',
  	alignItems: 'center',
  	alignSelf: 'stretch',
		marginTop: 20
	},
	container2: {
		padding: 30,
		marginTop: 20,
		alignItems: 'center'
	},
	flowRight: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	alignSelf: 'stretch'
	},
	buttonText: {
  	fontSize: 18,
  	color: 'white',
  	alignSelf: 'center'
	},
	button: {
  	height: 36,
		width: 50,
  	flex: 1,
  	flexDirection: 'row',
  	backgroundColor: '#48BBEC',
  	borderColor: '#48BBEC',
  	borderWidth: 1,
  	borderRadius: 8,
  	marginBottom: 10,
  	alignSelf: 'stretch',
  	justifyContent: 'center'
	},
	searchInput: {
  	height: 36,
  	padding: 4,
  	marginRight: 5,
  	flex: 4,
  	fontSize: 18,
  	borderWidth: 1,
  	borderColor: '#48BBEC',
  	borderRadius: 8,
  	color: '#48BBEC'
	},
	image: {
		width: 217,
		height: 138,
		marginBottom: 50
	}
});








>>>>>>> Fixed Android firebase functionality
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
<<<<<<< 0fba93b5d10533bf5b2b3a554b280ceaa123ef62

=======
/*
>>>>>>> Fixed Android firebase functionality
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ShoppingList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
<<<<<<< 0fba93b5d10533bf5b2b3a554b280ceaa123ef62

AppRegistry.registerComponent('ShoppingList', () => ShoppingList);
=======
*/
ReactNative.AppRegistry.registerComponent('ShoppingList', () => ShoppingListApp);
>>>>>>> Fixed Android firebase functionality
