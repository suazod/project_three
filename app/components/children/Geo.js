// Include React
var React = require("react");

var Geo = React.createClass({
  render: function() {
    return (

        <div className="large-12 columns">
          <div className="panel pet-primary">
            <div className="pet-heading">
              <h3 className="panel-title">Geo Location</h3>
            </div>
            <div className="pet-photo">
              <img src="images/labrador.png" alt="labrador"/>
                <div className="photo-icon">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
            </div>
            <div className="pet-body">
              Find me! and mark your location here!
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Geo;
