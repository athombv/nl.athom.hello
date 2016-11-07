"use strict";

var self = module.exports = {
	
	init: function(){		
		
		// when this app has been triggered on speech
		Homey.manager('speech-input').on('speech', function( speech ){
			
			Homey.log('onSpeech', speech);
			
			// say something back
			speech.say( __("hello") );
			
		});
	
	}
	
};
