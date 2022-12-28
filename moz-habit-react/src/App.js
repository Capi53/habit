import React from "react";
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { render } from "@testing-library/react";
import { StyleSheet, Text, View } from 'react-native';

function App() {
  // constructor(props){
  //   super(props)
  //   this.now = new Date();
  //   this.state = {
  //     time: `${this.now.getFullYear()}年${this.now.getMonth()}月${this.now.getDate()}日 (${this.now.getDay()})`
  //   }
  // }

  return(
    <View>
      <Main />
    </View>
  )
}

export default App;
