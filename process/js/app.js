var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

//var AptList = require('./AptList');
//var AddAppointment = require('./AddAppointment');
// var SearchAppointments = require('./SearchAppointments');

var MainInterface = React.createClass({
   render: function () {
     return (
       <div clasName="interface">
       <h1>Pet Appointments</h1>
       <li>Buffy 3:30 PM</li>

      </div>
     )
   }

});

//Render this component
ReactDOM.render(

  <MainInterface/>,
  document.getElementById('petAppointments')
);
