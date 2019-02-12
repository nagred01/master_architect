import React, { Component } from 'react';
import {Root} from 'native-base';
import NavigationRouter from './src/Router/NavigationRouter';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <Root><NavigationRouter /></Root>;
  }
}
