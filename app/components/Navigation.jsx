var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = () => {

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Counter</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://twitter.com/ahjiuhdotcom" target="blank">Sia Hua Jiuh</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Navigation;
