'use strict';

const styles1 = require('./styles.js');

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
	ListView,
	AlertIOS,
	Alert
} from 'react-native';

var firebase = require('firebase');


class ListPortal extends Component {

	constructor(props) {
  	super(props);
		this.getDate = this.getDate.bind(this);
		this.state = {
				name: '',
				id: 'ListPortal',
				date: ''
  	};
	}

	componentDidMount() {
		let Name = this.props.name;
		let currDate = this.getDate.bind(this);
		this.setState({
			name: Name,
			date: currDate,
		});
  }

	onWalmartPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'WalmartList',
			passProps: {
				name: name
			}
		});
	}

	onAmazonPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Amazon',
			passProps: {
				name: name
			}
		});
	}

	onRossPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Ross',
			passProps: {
				name: name
			}
		});
	}

	onCostcoPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Costco',
			passProps: {
				name: name
			}
		});
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

	getDate() {
		var Date = new Date().toDateString();
		//var n = date.toDateString();
		//var time = date.toLocaleTimeString();
		this.setState ({
			date: Date
		});
		console.log(Date + ' ');
		Alert.alert(Date + ' ');
	}
	//Change first <View back to {styles.container2}
	render() {
		console.log('CreatePortal.render');
		var date = new Date();

		//Alert.alert(" " + date);
		return (
			<View style={styles1.container}>

				<View style={styles.container}>
					<Text style={styles.header}>List Portal</Text>
					<Text style={styles.header}>{this.getDate.bind(this)}</Text>
				</View>
				<View>
					<View style={styles.container1}>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onWalmartPress.bind(this)}>
							<Text style={styles.buttonText}>Walmart</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onAmazonPress.bind(this)}>
							<Text style={styles.buttonText}>Amazon</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onRossPress.bind(this)}>
							<Text style={styles.buttonText}>Ross</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onCostcoPress.bind(this)}>
							<Text style={styles.buttonText}>Costco</Text>
						</TouchableHighlight>
					</View>
				</View>
		</View>
		)
	}
	//<ActionButton title="Add" onPress={this._addItem.bind(this)} />
//
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
		marginTop: 5,
		marginBottom: 20,
		fontSize: 40,
		textAlign: 'center',
		color: '#48BBEC'
	},
	container: {
		padding: 10,
		marginTop: 5,
		alignItems: 'center',
		borderColor: '#48BBEC',
  	borderWidth: 1,
	},
	container1: {
		padding: 10,
		marginTop: 5,
		alignItems: 'center',
	},
	container2: {
		padding: 30,
		marginTop: 5,
		marginBottom: 20,
		alignItems: 'center'
	},
	container3: {
		alignItems: 'stretch'
	},
	flowRight: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	alignSelf: 'stretch'
	},
	buttonText: {
  	fontSize: 30,
  	color: 'white',
  	alignSelf: 'center'
	},
	button: {
  	height: 35,
		width: 265,

  	flexDirection: 'row',
  	backgroundColor: '#48BBEC',
  	borderColor: '#48BBEC',
  	borderWidth: 1,
  	borderRadius: 8,
  	marginBottom: 1,
		marginTop: 10,
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
	},
	listview: {
    flex: 1,
  },
});

module.exports = ListPortal;
export {firebase};
