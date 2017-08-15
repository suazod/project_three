// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Profile = require("../components/children/Profile");
var About = require("../components/children/About");
var Geo = require("../components/children/Geo");
var Social = require("../components/children/Social");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Profile then show the appropriate component*/}
      <Route path="Profile" component={Profile} />

      {/* If user selects About then show the appropriate component*/}
      <Route path="About" component={About} />

      {/* If user selects Geo then show the appropriate component*/}
      <Route path="Geo" component={Geo} />

      {/* If user selects Social then show the appropriate component*/}
      <Route path="Social" component={Social} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Profile} />

    </Route>
  </Router>
);
