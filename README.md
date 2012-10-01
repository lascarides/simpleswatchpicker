Simple Swatch Picker
====================

A tiny, super-clean color picker widget for JQuery.
---------------------------------------------------

by Michael Lascarides

Important: Work in progress. Sorta works, but a more refined version coming shortly. [Oct 1, 2012]

Another color picker? Why this one?
-----------------------------------

* It's tiny. 2.6kB of Javascript in the minified version, just a smidgen of CSS to go with it, and no images.
* It's versatile. Options control what range of colors goes in the palette, the number of rows and columns of colors, and even the size and shape of the swatches (using only CSS).
* It's simple. If you need a Photoshop-style color picker for a design project, this ain't it. But sometimes you just want a super-basic picker for color-coding folder tabs, or inboxes, or a kid's avatar. With Simple Swatch Picker, create a text field in your application, add one line of code, and you've got it.
* It's elegant. No cruft, no eyedroppers, no RGB or Hex codes showing. Just a sweet little grid of chips and one big selected swatch.

The Simple Swatch Picker installs in seconds, and attaches a beautiful rainbow of colors from either one of the preset palettes or your own custom palette.

Basic usage
-----------

To activate Simple Swatch Picker, simply include JQuery, the plugin file and the CSS file in your HTML page, then use the following Jquery statement to add the picker to the form field of your choice:

To add a Simple Swatch Picker to this hidden field:

&lt;input type="hidden" id="myField"&gt;

Add this code to your page:

$("#myField").simpleSwatchPicker();


You should use it if...
-----------------------

* You want to add a color picker quickly
* You want a range of colors, but don't care which specific ones

You should not use it if...
---------------------------

* You want more functionality than is here (an eyedropper, a hex converter, etc)
* You want a specific palette of hex-perfect colors

