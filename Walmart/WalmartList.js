'use strict';

import * as firebase from 'firebase';

const styles1 = require('./../styles.js');
//var CreatePortal = require('./create_portal.ios');
//var MainMenu = require('./main_page.ios');
//var Produce = require('./Produce');
//import {firebase} from './list_portal.ios';
//var firebaseConfig = require('./firebase_config');

//import FirebaseConfig from './firebase_config';

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
	AlertIOS
} from 'react-native';


class WalmartList extends Component {

	constructor(props) {
  	super(props);

		//FirebaseConfig.initialize();
		/*
		firebase.database().ref('Lists/Walmart/Dairy').update({
			var name = 'Sour Cream';
    	'Sour Cream': '',
			name: 'Cheese',
  	});
		*/

		this.state = {
    	dataSource: new ListView.DataSource({
      	rowHasChanged: (row1, row2) => row1 !== row2,
				name: '',
				id: 'WalmartList',
    	})
  	};
		//this.itemsRef = firebaseWalmart.database().ref();
		//let dairyPath = 'Lists/Walmart/Dairy'
		//this.itemsRef = firebase.database().ref(dairyPath);
	}

	componentDidMount() {
		let Name = this.props.name;
		/*
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    })
		*/
		//this.listenForItems(this.itemsRef);
		this.setState({
			name: Name
		})
  }
	/*
	listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

	_addItem() {
    AlertIOS.prompt(
      'Create New List',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

	_renderItem(item) {
		const onPress = () => {
      AlertIOS.prompt(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancel')}
        ],
        'default'
      );
    };
		return (
      <ListItem item={item} onPress={onPress} />
    );
	}
	*/
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

	onProducePress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Produce',
			passProps: {
				name: name
			}
		});
	}

	onDairyPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Dairy',
			passProps: {
				name: name
			}
		});
	}

	onMeatPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Meat',
			passProps: {
				name: name
			}
		});
	}

	onMiscFoodPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'MiscFood',
			passProps: {
				name: name
			}
		});
	}

	onNonFoodPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'NonFood',
			passProps: {
				name: name
			}
		});
	}

	onCannedPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'Canned',
			passProps: {
				name: name
			}
		});
	}

	//Change first <View back to {styles.container2}
	render() {
		console.log('CreatePortal.render');
		return (
			<View style={styles1.container}>
				<View style={styles.container}>
					<Text style={styles.header}>Walmart</Text>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this.onListPortalPress.bind(this)}>
							<Text style={styles.buttonText1}>Return To Portal</Text>
						</TouchableHighlight>
				</View>
				<View>
					<View style={styles.container1}>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onProducePress.bind(this)}>
							<Text style={styles.buttonText}>Produce</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onDairyPress.bind(this)}>
							<Text style={styles.buttonText}>Dairy</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onMeatPress.bind(this)}>
							<Text style={styles.buttonText}>Meat</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onMiscFoodPress.bind(this)}>
							<Text style={styles.buttonText}>Misc. Food</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onNonFoodPress.bind(this)}>
							<Text style={styles.buttonText}>Non-Food</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onCannedPress.bind(this)}>
							<Text style={styles.buttonText}>Canned</Text>
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
	buttonText1: {
  	fontSize: 12,
  	color: 'white',
  	alignSelf: 'center'
	},
	button: {
  	height: 25,
		width: 100,

  	flexDirection: 'row',
  	backgroundColor: '#48BBEC',
  	borderColor: '#48BBEC',
  	borderWidth: 1,
  	borderRadius: 8,
  	marginBottom: 1,
		marginTop: 10,
		justifyContent: 'center'
	},
	button1: {
  	height: 40,
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

module.exports = WalmartList;
