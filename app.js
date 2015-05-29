"use strict";
  
function App() 
{
	
}

module.exports = App;

App.prototype.init = function(){
	
  	setInterval(function(){
		Homey.log('Hi!');
	}, 1000);
	
	Homey.manager('ledring').animate({
		name: 'pulse'
	});
  
};

App.prototype.speech = function( speech ) {
	Homey.manager('speech-output').say( "hello" );
}