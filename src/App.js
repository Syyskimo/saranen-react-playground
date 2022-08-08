import React from 'react';
import logo from './logo.svg';

class App extends React.Component {

  render() {
  return (
    <header>
        <div className="row">
            <div className="logo">
                <img id="logo" src="img/logo-drink.png" />
            </div>
            <div id="promile" class="promile">0.22</div>
        </div>
    </header>
    );
  }
}

export default App;
