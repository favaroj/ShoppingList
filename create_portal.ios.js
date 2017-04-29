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
	TextInput,
	AsyncStorage
} from 'react-native';

var ListPortal = require('./list_portal.ios');
var MainMenu = require('./main_page.ios');



class CreatePortal extends Component {



	constructor(props) {
    super(props);
    this.state = {
			name: '',
		 	id: 'CreatePortal'};
  }

	onNameTextChanged(event) {
  	console.log('onNameTextChanged');
  	this.setState({ name: event.nativeEvent.text });
  	console.log(this.state.name);
	}

	welcomeMessage() {
		console.log('Welcome ' + this.state.name);
		alert('Welcome ' + this.state.name + '!');
	}

	onListPortalPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'ListPortal',
			passProps: {
				name: name
			}
		});
		//alert('Welcome ' + this.state.name + '!');
	}

	getName() {
		let portalName = this.state.name;
		return portalName;
	}

	onMainMenuPress(event) {

		let name = this.state.name;
		this.props.navigator.push({
			id: 'Main',
			passProps: {
				name: name
			}
		});

		//alert('Welcome ' + this.state.name + '!');
	}
	/*onChangeText={(text) => this.setState({name})}*/
	render() {
		console.log('CreatePortal.render');
		return (
			<View style={styles.container2}>
				<Text style={styles.header}>Create Your List Portal</Text>
					<View style={styles.flowRight}>
						<TextInput
							style={styles.searchInput}
							placeholder='Enter Portal Name'
							onChange={this.onNameTextChanged.bind(this)}
							value={this.state.name}
						/>
					</View>
					<View style={styles.container1}>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onListPortalPress.bind(this)}>
							<Text style={styles.buttonText}>Create</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onMainMenuPress.bind(this)}>
							<Text style={styles.buttonText}>Main</Text>
						</TouchableHighlight>
					</View>
				<Text style={styles.description}>First Time Setup:</Text>
				<Text>1. Enter Name into input box.</Text>
				<Text>2. Click Create and start adding!</Text>
			</View>
		)
	}
}//End CreatePortal class

var styles = StyleSheet.create({
	description: {
		marginTop: 40,
		marginBottom: 10,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	header: {
		marginTop: 50,
		marginBottom: 40,
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
		alignItems: 'center',
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

//export{portalName};
module.exports = CreatePortal;
