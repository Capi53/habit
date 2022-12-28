import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.date = "fuga";
    }    

    render() {
        return (
                <div className="App">
                <header className="App-header">
        <Text>{this.props.date}</Text> 
                
                {/* <img src={logo} className="App-logo" alt="logo" /> 
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> 
                <a
                    className="App-link"
                    href="."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                */}
                </header>
                <body className="App-body">
                <div className="task" id="1">
                    <div className="box-schedule">
                    <div className="continue-date">
                        2
                        <div className="start-at">
                        07:00
                        </div>
                    </div>
                    </div>
                    <div className="content">
                    <p className="before">
                        起床の後
                    </p>
                    <h3 className="task_title">
                        研究
                    </h3>
                    <p className="description">
                        まずは1分，初めてみよう！
                    </p>
                    <progress value="2" max="30">
                    </progress>
                    </div>
                </div>
                </body>
                </div>
        )
    }
}