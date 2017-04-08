'use strict';

//destructuring assignment- call StyleSheet instead of ReactNative.StyleSheet
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


class ListPortal extends Component {

	_navigate(name) {
		this.props.navigator.push({
			name: 'Main',
			passProps: {
				name: name
			}
		});
	}

	_navigate2(name) {
		this.props.navigator.push({
			name: 'ListPortal',
			passProps: {
				name: name
			}
		});
	}

	/*
	constructor(props) {
  	super(props);
  	this.state = {
    	searchString: 'Bob'
  	};
	},
	onSearchTextChanged(event) {
  	console.log('onSearchTextChanged');
  	this.setState({ searchString: event.nativeEvent.text });
  	console.log(this.state.searchString);
	},
	*/
	render() {
		console.log('CreatePortal.render');
		return (
			<View style={styles.container2}>
				<Text style={styles.header}>Welcome to your List Portal!</Text>
					<View style={styles.flowRight}>
						<TextInput
							style={styles.searchInput}
							placeholder='Enter Portal Name'/>
					</View>
					<View style={styles.container1}>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={ () => this._navigate2('List Portal') }>
							<Text style={styles.buttonText}>Create</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.container1}>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={ () => this._navigate('Main') }>
							<Text style={styles.buttonText}>Return To Main Menu</Text>
						</TouchableHighlight>
					</View>
				<Text style={styles.description}>First Time Setup:</Text>
				<Text>1. Enter Name into input box.</Text>
				<Text>2. Click Create and start adding!</Text>
			</View>
		)
	}
}

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

module.exports = ListPortal;
