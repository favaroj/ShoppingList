'use strict';

import * as firebase from 'firebase';
import FirebaseConfig from './firebase_config';
const ListItem = require('./components/ListItem');
const styles1 = require('./styles.js');


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


class AmazonList extends Component {

	constructor(props) {
  	super(props);

		this.state = {
    	dataSource: new ListView.DataSource({
      	rowHasChanged: (row1, row2) => row1 !== row2,
			id: 'Amazon'
    	})

  	};
		let amazonRef = 'Lists/Amazon';
		this.itemsRef = firebase.database().ref(amazonRef);
	}

	componentDidMount() {
		let Name = this.props.name;
		let itemName = this.props.itemName;

		this.listenForItems(this.itemsRef);
		this.setState({

			//itemName: itemName

		});
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
		let itemName = this.state.itemName;
		this.itemsRef.push({ title: itemName });
		Alert.alert(itemName + ' has been added!');
		this.setState({itemName: ''});
  }

	_renderItem(item) {
		let itemName = this.state.itemName;
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

	onItemTextChanged(event) {
  	console.log('onNameTextChanged');
  	this.setState({ itemName: event.nativeEvent.text });
  	console.log(this.state.itemName);
	}

	render() {
		console.log('CreatePortal.render');
		return (
			<View style={styles1.container}>
				<View style={styles.container}>
					<Text style={styles.header}>Amazon</Text>
					<View style={styles.flowRight}>
						<TextInput
							style={styles.searchInput}
							placeholder='Enter Item Name'
							onChange={this.onItemTextChanged.bind(this)}
							value={this.state.itemName}
						/>
						<TouchableHighlight style={styles.button}
								underlayColor='#99d9f4' onPress={this._addItem.bind(this)}>
							<Text style={styles.buttonText}>Add Item</Text>
						</TouchableHighlight>
					</View>
						<TouchableHighlight style={styles.button1}
								underlayColor='#99d9f4' onPress={this.onListPortalPress.bind(this)}>
							<Text style={styles.buttonText}>Return to Portal</Text>
						</TouchableHighlight>
				</View>
				<View>
					<View>
						<ListView
          		dataSource={this.state.dataSource}
          		renderRow={this._renderItem.bind(this)}
          		enableEmptySections={true}
							style={styles1.li}
          		/>
					</View>
				</View>
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

module.exports = AmazonList;
