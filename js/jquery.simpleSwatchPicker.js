//////////////////////////////////////////////
//                                          //
// Simple Swatch Picker                     //
// A JQuery color picker plugin             //
//                                          //
//////////////////////////////////////////////
//                                          //
// by Michael Lascarides                    //
// http://lascarid.es/                      //
// v0.1 October 2012                        //
//                                          //
// Released under an MIT License.           //
// See attached LICENSE.TXT for details.    //
//                                          //
//////////////////////////////////////////////

(function( $ ){

  $.fn.simpleSwatchPicker = function(options) {

  	// Default options
	var settings = $.extend( {
      'palette'			: 'default',
      'rows'			: 6,
      'cols'			: 12,
      'saturation'		: [80.0, 100.0],
      'hue'				: [0.0, 300.0],
      'value'			: [30.0, 98.0],
      'swatchContainer'	: ''
    }, options);

	var originalField = this;

    return this.each(function() {

      // Attach picker to form field
      var ssp;
      if (settings['swatchContainer'] == '') {
      	ssp = $('<div class="simpleSwatchPicker"></div>').insertAfter(this);
      } else {
      	ssp = $(settings['swatchContainer']);
      }

      // Add selected swatch and palette
      ssp.append('<div class="sspSelectedChip"></div><div class="sspPalette"></div>');
      var selectChip 	= ssp.find('.sspSelectedChip').first();
      var palette 		= ssp.find('.sspPalette').first();

      for (var r = 0; r < settings['rows']; r++) {
	      for (var c = 0; c < settings['cols']; c++) {
		    var h = getComponent('hue', 'cols', c);
		    var s = getComponent('saturation', 'rows', r);
		    var v = getComponent('value', 'rows', r);
	      	palette.append('<div class="sspChip" style="background-color: hsl(' + h + ',' + s + '%, ' + v + '%);"></div>');
	      }
      }

      // Set palette size for # of rows, cols
      var chipSize = ssp.find('.sspChip').first();
      palette.css({
      	'width' : (chipSize.outerWidth() * settings['cols']) + "px",
      	'height' : (chipSize.outerHeight() * settings['rows']) + "px",
      	'left' : selectChip.position().left + selectChip.outerWidth()
      });

      // Add palette toggle action
      selectChip.click(function(){
      	palette.slideToggle();
      });

      // Add color selection action
      ssp.find('.sspChip').click(function(){
      	var newColor = rgb2hex($(this).css('background-color'));
      	// Change swatch
      	selectChip.css({
      		'background-color': newColor
      	});
      	// Change value of original form field
      	$(originalField).val(newColor);
      	// Hide palette
      	palette.slideUp();
      });

      // Find the current component along its range given position in palette
      function getComponent(component, direction, current) {
      	var step = (settings[component][1] - settings[component][0]) / settings[direction];
      	return parseInt((current * step) + settings[component][0]);
      }

		// Function to convert JQuery rgb color to a hex
		// (Thx R0bb13!) http://markmail.org/message/hilbsejsl4zxwlv6#query:+page:1+mid:hilbsejsl4zxwlv6+state:results
		function rgb2hex(rgb){
			rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
			return (rgb && rgb.length === 4) ? "#" +
			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
		}

    });

  };
})( jQuery );