import React from 'react';

class Header extends React.Component {

  render() {

    const degree = Math.round(this.props.promile * 90);

    //style={{width : this.props.children}}

    return (
        <header>
            <div className="row">
                <div className="logo">
                    <img id="logo" src="img/logo-drink.png" style={{transform: `rotate(${degree}deg)`}} />
                </div>
                <div id="promile" className="promile">{this.props.promile}</div>
            </div>
        </header>
    );
  }
}

export default Header;
