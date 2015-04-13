module.exports = function(){
	
	var animation = [];
	for( var f = 0; f < 30; f++ ) {
		var frame = {
			pixels: []
		};
		
		for( var i = 0; i < 30; i++ ) {
			var c = Homey.color('red').hue( ( (i+f)/30 ) % 30 );		  
			frame.pixels.push([
				Math.round(255 * c.red()),
				Math.round(255 * c.green()),
				Math.round(255 * c.blue())
			]);
		}

		animation.push( frame );
	}
	
	return animation;
	
}