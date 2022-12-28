import React from "react";
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { render } from "@testing-library/react";
import { StyleSheet, Text, View } from 'react-native';

function App() {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       current: new Date().toLocaleString()
  //     };
  // }
  var dateObj = new Date();
  var d = '';
  var aryWeek = ['日', '月', '火', '水', '木', '金', '土'];

  d = dateObj.getFullYear() + '年' + //年の取得
      (dateObj.getMonth() + 1) + '月' + //月の取得 ※0~11で取得になるため+1
      dateObj.getDate() + '日' + //日付の取得
      '(' + aryWeek[dateObj.getDay()] + ')' //曜日の取得 0~6で取得になるため事前に配列で設定


  return(
    <View>
      <Main date={d} />
    </View>
  )
}


export default App;
