'use strict';

//destructuring assignment- e.g. call StyleSheet instead of ReactNative.StyleSheet
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Navigator,
	TouchableHighlight,
	Image,
	TextInput
} from 'react-native';

var CreatePortal = require('./create_portal.ios');
var ListPortal = require('./list_portal.ios');


class MainPage extends Component {

	onCreatePortalPress() {
		this.props.navigator.push({
			title: 'Create Portal',
			component: CreatePortal,
		});
	}

	onListPortalPress() {
		this.props.navigator.push({
			title: 'List Portal',
			component: ListPortal,
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./Resources/shoppingCart-image.png')} style={styles.image}/>
				<View style={styles.flowRight}>
					<TouchableHighlight style={styles.button}
							underlayColor='#99d9f4' onPress={ () => this.onListPortalPress() }>
						<Text style={styles.buttonText}>Enter List Portal</Text>
					</TouchableHighlight>
				</View>
					<View style={styles.flowRight}>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={ () => this.onCreatePortalPress() }>
							<Text style={styles.buttonText}>Create List Portal</Text>
						</TouchableHighlight>
					</View>
				<Text style={styles.description}>First Time Setup:</Text>
				<Text>1. Create your List Portal.</Text>
				<Text>2. Access your List Portal and start adding!</Text>
			</View>
		)
	}
}//End MainPage Class

var styles = StyleSheet.create({
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

module.exports = MainPage;
