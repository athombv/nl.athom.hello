"use strict";
  
function App() 
{
	
}

module.exports = App;

App.prototype.init = function(){
	
	console.log('init');
	
	Homey.manager('ledring').animate({
		name: 'pulse'
	});
  
};

App.prototype.events = {
	speech: function( speech ) {
		Homey.say( __("hallo") );
	}
};

function foo() {}

while (1)
  foo();
