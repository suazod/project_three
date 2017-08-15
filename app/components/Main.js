// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">

      <div className="row">

        {/* This code will dump the correct Child Component */}
        {this.props.children}

      </div>


      <div className="row">
        <div className="large-12 columns">
          <div className="main-navigation">
            <nav>
              <Link to="/Profile"><button className="button success"><i className="fa fa-paw" aria-hidden="true"></i></button></Link>
              <Link to="/About"><button className="button success">Pet Sitting</button></Link>
              <Link to="/Geo"><button className="button success">Geo Location</button></Link>
              <Link to="/Social"><button className="button success">Social Media</button></Link>
            </nav>
          </div>
        </div>
     </div>



      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
