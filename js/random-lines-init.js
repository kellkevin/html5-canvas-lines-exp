/*
	random-lines-init.js
	Kevin Kelly
	The first of the exper. in its' original form.
*/


		var canvasC = document.getElementById("myCanvas");
		var context = canvasC.getContext('2d');
		// COunter
		var numCount = 0;	
		// Last Coord
		var xLastCoord = 0, yLastCoord =0;
		var strStatus ="";
		function drawRandomLine(numWidth,numHeight)
		{
			
			// get random number
			numCount ++;
			strStatus += "\n Move " + numCount +" Start /===================";
			strStatus += "\n Last Moves \n x = " +xLastCoord + " \n  y = " +yLastCoord;
			var xMove = Math.random() * numWidth;
			var yMove = Math.random() * numHeight;
			var xDraw = Math.random() * numWidth;
			var yDraw = Math.random() * numHeight;
			

			strStatus += "\n xMove =" + xLastCoord;
			strStatus += "\n yMove =" + yLastCoord;
			strStatus += "\n xDraw =" + xDraw;
			strStatus += "\n yDraw =" + yDraw;
				
			var numThick = 5 * Math.random();

			with(context)
			{
				beginPath();
				moveTo(xLastCoord,yLastCoord);
				// get line to draw
				lineTo(xDraw,yDraw);
				lineWidth = numThick;
				lineJoin = 'miter';
				stroke();
			}
			strStatus += "\n Move " + numCount +"  End /=================== \n \n";
			

			console.log(strStatus);

			xLastCoord = xDraw;
			yLastCoord = yDraw;

		}

		var numInt = window.setInterval(function () {drawRandomLine(300,300) }, 100);