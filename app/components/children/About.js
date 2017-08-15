// Include React
var React = require("react");

var About = React.createClass({
  render: function() {
    return (

        <div className="large-12 columns">
          <div className="panel pet-primary">
            <div className="pet-heading">
              <h3 className="panel-title">Pet Sitting</h3>
            </div>
            <div className="pet-photo">
              <img src="images/labrador.png" alt="labrador"/>
                <div className="photo-icon">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
            </div>
            <div className="pet-body">
              <div className="row">
                <div className="large-12 columns">
                    <p>Lorem ipsum dolor sit amet, consectetur. Aenean ut elementum sapien. Integer dignissim felis nec purus hendrerit ultricies. Donec sollicitudin elementum lacus et elementum. Cras semper libero sapien, ut rhoncus ipsum pellentesque quis. Donec fermentum lorem a pharetra laoreet. Mauris suscipit velit a purus sodales iaculis. Suspendisse sed pretium nulla. </p>

                    <p>Lorem ipsum dolor sit amet, consectetur. Aenean ut elementum sapien. Integer dignissim felis nec purus hendrerit ultricies. Donec sollicitudin elementum lacus et elementum. Cras semper libero sapien, ut rhoncus ipsum pellentesque quis. Donec fermentum lorem a pharetra laoreet. Mauris suscipit velit a purus sodales iaculis. Suspendisse sed pretium nulla. </p>

                    <p>Lorem ipsum dolor sit amet, consectetur. Aenean ut elementum sapien. Integer dignissim felis nec purus hendrerit ultricies. Donec sollicitudin elementum lacus et elementum. Cras semper libero sapien, ut rhoncus ipsum pellentesque quis. Donec fermentum lorem a pharetra laoreet. Mauris suscipit velit a purus sodales iaculis. Suspendisse sed pretium nulla. </p>

                    <p>Lorem ipsum dolor sit amet, consectetur. Aenean ut elementum sapien. Integer dignissim felis nec purus hendrerit ultricies. Donec sollicitudin elementum lacus et elementum. Cras semper libero sapien, ut rhoncus ipsum pellentesque quis. Donec fermentum lorem a pharetra laoreet. Mauris suscipit velit a purus sodales iaculis. Suspendisse sed pretium nulla. </p>
                </div>
              </div>

            </div>
          </div>
        </div>

    );
  }
});

module.exports = About;
