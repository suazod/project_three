// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Profile = React.createClass({
  render: function() {
    return (

        <div className="large-12 columns">
          <div className="panel pet-primary">
            <div className="pet-heading">
              <h3 className="panel-title">Pet Profile</h3>
            </div>
            <div className="pet-photo">
              <img src="images/labrador.png" alt="labrador"/>
                <div className="photo-icon">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
            </div>
            <div className="pet-body">
              <header className="pet-name">Bandit</header>
              <ul className="pet-info-main">
                <li>Breed</li>
                <li>Age</li>
                <li>Size</li>
                <li>Gender</li>
                <li>Neutered</li>
              </ul>
            </div>
          </div>
        </div>

    );
  }
});

module.exports = Profile;
