import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Main from './containers/Main'
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Main />
        </div>
      </ Provider>
    );
  }
}

export default App;
