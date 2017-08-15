// Include React
var React = require("react");

var Social = React.createClass({
  render: function() {
    return (

        <div className="large-12 columns">
          <div className="panel pet-primary">
            <div className="pet-heading">
              <h3 className="panel-title">Pet Social Media Platform</h3>
            </div>
            <div className="pet-photo">
              <img src="images/labrador.png" alt="labrador"/>
                <div className="photo-icon">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
            </div>
            <div className="pet-body">
              Lets meet! Lets be friends, all social media here
            </div>
          </div>
        </div>

    );
  }
});

module.exports = Social;
