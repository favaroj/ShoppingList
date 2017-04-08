'use strict';

var React = require('react');
var ReactNative = require('react-native');
var MainPage = require('./main_page.ios');


class ShoppingListApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={{ flex:1 }}
        initialRoute={{
          title: 'Main Menu',
          component: MainPage,
        }}/>
    );
  }
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

ReactNative.AppRegistry.registerComponent('ShoppingList', function() { return ShoppingListApp });
