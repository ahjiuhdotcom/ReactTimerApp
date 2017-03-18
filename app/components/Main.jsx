var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  // {props.children} is the place to put children route
  return (
    <div>
      <div>
        <div>
          <Navigation />
          <p>Main.jsx Rendered</p>
          { props.children }
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
