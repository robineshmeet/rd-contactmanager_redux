import React from 'react';
import './App.css';

import EntryPoint from './components/EntryPoint';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <EntryPoint />
      </div>
    );
  }
}
