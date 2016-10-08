// Today's Library Hours v.1 (March 30, 2011)
// Grand Valley State University Library Labs, 2011
// by Matthew Reidsma, reidsmam@gvsu.edu
// 
// Released under the GPL: http://www.gnu.org/licenses/gpl.html
//// Today's Library Hours v.1 (March 30, 2011)
// Grand Valley State University Library Labs, 2011
// by Matthew Reidsma, reidsmam@gvsu.edu
// 
// Released under the GPL: http://www.gnu.org/licenses/gpl.html
//

// Configuration:
// ------------------------------------------------------------------

// Enter the time your library opens, starting with Sunday. If your library is closed,
// enter "X" for the time. In the following example, the library is closed on Sunday 
// and opens at 9am Monday through Friday. On Saturday, the library opens at 1:30pm. 
// The script will print whatever format you decide to use in these variables. Make 
// sure to leave the quotes!
//
// EXAMPLE:
//
// var open=["X","9:00am","9:00am","9:00am","9:00am","9:00am","1:30pm"];

	var open=["X","12:00pm","12:00pm","12:00pm","12:00pm","X","9:00am"]; // Edit this line 

// Enter the time your library closes, starting with Sunday. If your library is 
// closed, enter "X" for the time.

	var close=["X","7:00pm","5:30pm","7:00pm","5:30pm","X","5:30pm"]; // Edit this line
		
// Do not edit below this line
// -------------------------------------------------------------------
		
	var currentTime = new Date()
	var day = currentTime.getDay()

	var openTime = open[day];
	var closeTime = close[day];
	createHours(openTime,closeTime);
		
	function createHours(openTime, closeTime) 
	{ // Build the hours string
		if(openTime == "X") {
			var libhours = "Closed";
			document.write(libhours);
		} else {
			var libhours = "<strong>Today&#8217;s hours:</strong> " + openTime + " &#8211; " + closeTime;
			document.write(libhours);
		}
	}


// Configuration:
// ------------------------------------------------------------------

// Enter the time your library opens, starting with Sunday. If your library is closed,
// enter "X" for the time. In the following example, the library is closed on Sunday 
// and opens at 9am Monday through Friday. On Saturday, the library opens at 1:30pm. 
// The script will print whatever format you decide to use in these variables. Make 
// sure to leave the quotes!
//
// EXAMPLE:
//
// var open=["X","9:00am","9:00am","9:00am","9:00am","9:00am","1:30pm"];

	var open=["X","12:00pm","12:00pm","12:00pm","12:00pm","X","9:00am"]; // Edit this line 

// Enter the time your library closes, starting with Sunday. If your library is 
// closed, enter "X" for the time.

	var close=["X","7:00pm","5:30pm","7:00pm","5:30pm","X","5:30pm"]; // Edit this line
		
// Do not edit below this line
// -------------------------------------------------------------------
		
	var currentTime = new Date()
	var day = currentTime.getDay()

	var openTime = open[day];
	var closeTime = close[day];
	createHours(openTime,closeTime);
		
	function createHours(openTime, closeTime) 
	{ // Build the hours string
		if(openTime == "X") {
			var libhours = "Closed";
			document.write(libhours);
		} else {
			var libhours = "<strong>Today&#8217;s hours:</strong> " + openTime + " &#8211; " + closeTime;
			document.write(libhours);
		}
	}
