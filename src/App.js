import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
//import { StackNavigator } from "react-navigation";

import LoginForm from './components/LoginForm';
import RouterComponent from './RouterComponent';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyC4qzmGNd6Q6Pbipv9LvxbF38mL6Kmh-_0",
      authDomain: "manager-78822.firebaseapp.com",
      databaseURL: "https://manager-78822.firebaseio.com",
      projectId: "manager-78822",
      storageBucket: "manager-78822.appspot.com",
      messagingSenderId: "62090083271"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}
//<RouterComponent />
export default App;