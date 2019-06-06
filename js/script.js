
	//Rysowanie w canvas
	document.querySelector('window');
	function addPreloader() {
		document.querySelector('body').classList.add('loaded');
	}


	window.addEventListener('load', addPreloader);
	var canvas = document.getElementById('can');
	canvas.width = 250;
	canvas.height = 400;
	var cWeight = canvas.weight;
	var cHeight = canvas.height;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'); /* pobieram zawartość canvas */

		//Rysuje
		/* fillRect(x,y,width,height) - rysuje wypełniony prostokąt
		strokeRect(x,y,width,height) - rysuje obramowanie prostokąta
		clearRext(x,y,width,height) - czyści określony obszar i czyni go przezroczystym */


		// MOJ OBRAZEK :)

		var robotX = 100, 
			robotY = 100,
			robotHeight = 100,
			robotWidth = 100,
			neckWidth = 30,
			neckHeight = 20,
			mouthW = robotWidth - 40,
			mouthH = 40,
			eyeWidth = 10,
			eyeHeight = 4,
			noseWidth = 10,
			noseHeight = 18,
			legWidth = 10,
			legHeight = 15,
			textWidth = c.measureText("Canvas").width;


		//rysuję robota
		function drawBodyRobot() {
			c.fillStyle = '#aaa';
			c.fillRect(robotX, robotY, robotWidth, robotHeight);

		}

		function drawAntennas() {
			//rysuje czułka robota
			c.moveTo(robotX + (robotWidth / 2), robotY);
			c.lineTo(robotX, robotY / 2);
			c.moveTo(robotX + (robotWidth / 2), robotWidth);
			c.lineTo(robotX + robotWidth, robotY / 2);

			c.moveTo(robotX + 20, robotY / 2 - 10);
			c.lineTo(robotX - 20, robotY / 2 + 10);
			c.moveTo(robotX + robotWidth + 20, robotY / 2 + 10);
			c.lineTo(robotX + robotWidth - 20, robotY / 2 - 10);

		}

		function drawLegs() {
			//nogi
			c.fillStyle = '#aaa';
			c.fillRect(robotX + robotWidth / 2 + 20, robotY +  robotHeight * 2 + neckHeight, legWidth, legHeight);
			c.fillRect(robotX + robotWidth / 2 -20, robotY +  robotHeight * 2 + neckHeight, legWidth, legHeight);
			c.moveTo(robotX + robotWidth / 2 + 20, robotY +  robotHeight * 2 + neckHeight);
			c.lineTo(robotX + robotWidth / 2 + 20, robotY +  robotHeight * 2 + neckHeight + 30);
			c.lineTo(robotX + robotWidth / 2 + 20 + 30,robotY +  robotHeight * 2 + neckHeight + 30);
			c.moveTo(robotX + robotWidth / 2 - 20 + legWidth, robotY +  robotHeight * 2 + neckHeight);
			c.lineTo(robotX + robotWidth / 2 - 20 + legWidth, robotY +  robotHeight * 2 + neckHeight + 30);
			c.lineTo(robotX + robotWidth / 2 - 20 - 20,robotY +  robotHeight * 2 + neckHeight + 30);
		}


		function drawArm() {
			//ręce
			c.moveTo(robotX + robotWidth , robotHeight + neckHeight + robotHeight + robotHeight / 2);
			c.lineTo(robotX + robotWidth, robotY + robotHeight * 2);
			c.lineTo(robotX + robotWidth + 20, robotY + robotHeight * 2 + neckHeight);

			c.moveTo(robotX, robotHeight + neckHeight + robotHeight + robotHeight / 2);
			c.lineTo(robotX, robotY + robotHeight * 2);
			c.lineTo(robotX - 20, robotY + robotHeight * 2 + neckHeight);
			c.fill();

		}

		function drawEyebrow() {
			//brwi

			c.moveTo(robotX + 15, robotY + 15);
			c.lineTo(robotX + 30, robotY + 10);
			c.moveTo(robotX + robotWidth - 15, robotY + 15);
			c.lineTo(robotX + robotWidth - 30, robotY + 10);
		}

		function drawEye() {
			//oczy

			c.fillStyle = '#fff';
			c.fillRect(robotX + 20, robotY + 20, eyeWidth, 10);
			c.fillStyle = '#4c5763';
			c.fillRect(robotX + 20, robotY + 20, eyeWidth, eyeHeight);
			c.fillRect(robotX + 22, robotY + 25, eyeWidth / 2, 5);

			c.fillStyle = '#fff';
			c.fillRect(robotX + robotWidth - 20 - eyeWidth, robotY + 20, eyeWidth, 10);
			c.fillStyle = '#4c5763';
			c.fillRect(robotX + robotWidth - 20 - eyeWidth, robotY + 20, eyeWidth, eyeHeight);
			c.fillRect(robotX + robotWidth - 18 - eyeWidth, robotY + 25, eyeWidth / 2, 5);
			if (eyeHeight > 8) {
				eyeHeight = 2;
			}
			eyeHeight += 4;
		}
		function drawNose() {
			//nos
			c.fillStyle = '#45000f';
			c.fillRect(robotX + ( robotWidth / 2 ) - (noseWidth / 2), robotY + robotHeight / 2, noseWidth, -noseHeight);

		}
		function drawTeeth() {

			//zeby
			c.fillStyle = '#45000f';
			c.fillRect(robotWidth + 20, robotY + robotHeight - 20 - (mouthH / 2), mouthW, 25);

			for (var i = robotWidth + 23; i < robotX + robotWidth - 20; i += 15) {
				c.fillStyle = '#fff';
				
				c.fillRect(i, robotY + robotHeight - 20 - (mouthH / 2), 6, 5);
				
				if ( i % 2 == 0 ) {
					c.fillStyle = '#fff';
					c.fillRect(i, robotY + robotHeight - 20 - (mouthH / 2), 8, 8);
				}
				
			}

			for (var i = robotWidth + 23; i < robotX + robotWidth - 20; i += 15) {
				c.fillStyle = '#fff';
					
				c.fillRect(i, robotY + robotHeight -20, 7, 6);
				if (!( i % 2 == 0 )) {
					c.fillStyle = '#fff';
					c.fillRect(i, robotY + robotHeight - 15, 8, -8);
				}
			}
		}

		function drawNeck() {
			//szyja
			c.fillStyle = '#aaa';
			c.fillRect(robotX + (robotWidth / 2) - (neckWidth / 2 ), robotY + robotHeight, neckWidth, neckHeight);
			c.stroke();
			c.fillStyle = '#aaa';
			c.fillRect(robotX, robotY + robotHeight + neckHeight, robotWidth, robotHeight);
			c.strokeRect(robotX, robotY + robotHeight + neckHeight,robotWidth, robotHeight);

			for ( var i = 1; i < 30; i += 1) {
				c.fillStyle = '#' + i + 'c';
			c.fillRect(robotX + i,  robotY + robotHeight + neckHeight + i, robotX - i * 2, robotY - i * 2);
			}

			c.save(); // metoda zapamiętująca bieżące ustawienia rysowania
			c.font = "italic bold 16px Arial";
			c.textBaseline = "center";
			c.fillStyle="#aa000a";
			c.scale(1, 0.9); // skalowanie tekstu
			c.rotate(20 * Math.PI / 190);
			c.fillText('Canvas', 210, 233);
			c.restore();
		}

		function drawRobot() {
			drawBodyRobot();
			drawAntennas();
			drawLegs();
			drawArm();
			drawEyebrow();
			drawEye();
			drawNose();
			drawTeeth();
			drawNeck();
		
		}
		drawRobot();

		function closeEye() {
			setInterval(drawEye, 2500);
		}
		closeEye();
	};
