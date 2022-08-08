import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      promile: 0.15
    }
  }

  render() {
    return (
      <Header promile={this.state.promile} />
    );
  }
}

export default App;
