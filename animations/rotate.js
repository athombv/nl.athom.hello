module.exports = function(){

	var animation = [];
	for( var f = 0; f < 30; f++ ) {
		var frame = {
			duration: 10,
			pixels: []
		};
		
		for( var i = 0; i < 30; i++ ) {			
			var color = Homey.color('red').saturation(0.1);
			
			// create a tail
		  	for( var j = 0; j < 4; j++ ) {
				if( (i+j)%30 == f ) {
					color = color.saturation(1/(j+1));
				}
			}
			
			frame.pixels.push([
			    Math.round(255 * color.red()),
			    Math.round(255 * color.green()),
			    Math.round(255 * color.blue())
			]);
		}
	
		animation.push( frame );
	}
	
	return animation;
	
}