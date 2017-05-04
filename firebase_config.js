
import * as firebase from 'firebase';


class FirebaseConfig {

	static initialize() {
		firebase.initializeApp({
			apiKey: "AIzaSyAGwqziE1aB7oxkAeGAT8EIxRUol6O_fO0",
			authDomain: "shoppinglist-c4690.firebaseapp.com",
			databaseURL: "https://shoppinglist-c4690.firebaseio.com",
			projectId: "shoppinglist-c4690",
			storageBucket: "shoppinglist-c4690.appspot.com",
			messagingSenderId: "665003354084"
		});
	}
}
module.exports = FirebaseConfig;

//firebase_struct.json in case of failure
/*
{
  "Lists": {
    "Walmart": {
      "Dairy": {
				"Item": "Milk"
			},
			"Produce": {
				"Item": "Lettuce"
			},
			"Meat": {
				"Item": "Steak"
			},
			"Misc Food": {
				"Item": "Granola"
			},
			"Non Food": {
				"Item": "Batteries"
			},
			"Canned": {
				"Item": "Beans"
			}
    },
		"Amazon": {
			"Item": "Supplements"
		},
		"Ross": {
			"Item": "Foot Stool"
		}
  }
}
*/
