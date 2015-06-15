"use strict";

function App() 
{
	
}

module.exports = App;

App.prototype.init = function(){
	
	/*
	
	Homey.log( __("title") );
	*/
	
	setTimeout(function(){
		//wefs
	}, 2001);
	
	var i = 0;
	
	Homey.settings.counter = 0;
	setInterval(function(){
		Homey.settings.counter = i++;
		Homey.log("counter: " + i);
	}, 1000);
	
	Homey.manager('speech-input').on('speech', function(speech){
		Homey.log("speech", speech);
		
		Homey.manager("speech-input").ask("Which movie?", function( movie ) {

			if( movie instanceof Error ) return Homey.log( movie.toString() );

			Homey.log("movie: ", movie);
		});
		
	});
	
	Homey.manager('flow').on('action.example_action', function(args, callback){
		Homey.log("flow.action.example_action", args, callback);
	});
  
};