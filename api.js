"use strict"

module.exports = [
	
	
	{
		method: 		'GET',
		requires_authorization: false,
		path:			'/',
		fn: function( callback, args ){
			callback( 'hi!' );
		}
	}
	
	
]