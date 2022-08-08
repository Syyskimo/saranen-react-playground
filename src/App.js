import React from 'react';
import Header from './Header';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      promile: 0.15
    }
  }

  render() {
    return (
      <><Header promile={this.state.promile} /><Profile /></>
    );
  }
}

export default App;
