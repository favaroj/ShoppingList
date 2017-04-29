'use strict';

import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles1 = require('./styles.js');
var CreatePortal = require('./create_portal.ios');
var MainMenu = require('./main_page.ios');
var Produce = require('./Produce');
var WalmartList = require('./WalmartList');

import FirebaseConfig from './firebase_config';

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
	TextInput,
	ListView,
	AlertIOS,
	Alert
} from 'react-native';



class ProduceList extends Component {

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
				id: 'Produce',
    	})
  	};
		//this.itemsRef = firebaseWalmart.database().ref();
		let produceRef = 'Lists/Walmart/Produce';
		this.itemsRef = firebase.database().ref(produceRef);
	}

	componentDidMount() {
		let Name = this.props.name;
		/*
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    })
		*/
		this.listenForItems(this.itemsRef);
		this.setState({
			name: Name
		})
  }

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
    Alert.alert(
      'Add New Item',
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
      Alert.alert(
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

	onWalmartMainPress(event) {
		let name = this.state.name;
		this.props.navigator.push({
			id: 'WalmartList',
			passProps: {
				name: name
			}
		});
		//alert('Welcome ' + this.state.name + '!');
	}



	//Change first <View back to {styles.container2}
	render() {
		console.log('CreatePortal.render');
		return (
			<View style={styles1.container}>

				<View style={styles.container}>
					<Text style={styles.header}>Produce</Text>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this._addItem.bind(this)}>
							<Text style={styles.buttonText}>Add Item</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onWalmartMainPress.bind(this)}>
							<Text style={styles.buttonText}>Return to Walmart</Text>
						</TouchableHighlight>
				</View>
				<View>
					<View>
						<ListView
          		dataSource={this.state.dataSource}
          		renderRow={this._renderItem.bind(this)}
          		enableEmptySections={true}
          		/>
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
		fontSize: 30,
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
  	fontSize: 12,
  	color: 'white',
  	alignSelf: 'center'
	},
	button: {
  	height: 25,
		width: 80,

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
  	height: 25,
		width: 200,

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

module.exports = ProduceList;
