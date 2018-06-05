
	///////////////// Gra w tenis

	/* const - stała wartości stałe, nie bedą zmieniane, var lub let - zmienna - przypisanie wartości, ale będzie ona zmieniana na różnych etapach programu*/
	var canvas1 = document.getElementById('canvas1');
	const c1 = canvas1.getContext('2d'); /* pobieram zawartość canvas */
	canvas1.width = 900;
	canvas1.height = 500;
	const startTtenis = document.getElementById('startTenis');
	const gamOve = document.getElementById('gamOve');
	const c1Width = canvas1.width;
	const c1Heihgt = canvas1.height;
	const ballSize = 20; /*rozmiar piłki*/
	const paddleWidth = 20; /* wysokosc i szerokosc paletek */
	const paddleHeight = 100;
	const playerX = 70; /* położenie paletek oś X - wartość stała/ paletka gracza margines 70px */
	const cpuX = c1Width - (playerX + paddleWidth);
	const lineHeight = 16; /* linie na srodku boiska */
	const lineWidth = 6;
	var timeOutTenis;
	var score = document.getElementById('score');
	var scorePlayer = 0;

	//zmienne okreslające położenie piłki - poczatkowe
	var ballX = c1Width / 2 - ballSize / 2; /* 490 do 510 */
	var ballY = c1Heihgt / 2 - ballSize / 2; /*  240 do 260 */
	//zmienne określajace położenie paletek względem osi Y
	var playerY = 200;
	var cpuY = 200;
	// zmienne określające zmiany połozenia piłki
	var ballspeedX;
	var ballspeedY;


	function player() {
		//rysuję piłkę
		c1.fillStyle = '#ffff00';
		c1.fillRect(playerX, playerY, paddleWidth, paddleHeight);
	}

	function cpu() {
		//rysuję paletki
		c1.fillStyle = '#5ccc00';
		c1.fillRect(cpuX, cpuY, paddleWidth, paddleHeight);
	}

	function ball() {
		//rysuję piłkę
		var middleBall = ballY + ballSize / 2;
		c1.fillStyle = '#aaaaaa'
		c1.fillRect(ballX, ballY, ballSize, ballSize);
		// położenie piłki zmienia się o wartośc ballspeed

		ballX += ballspeedX;
		ballY += ballspeedY;

		if (ballY <= 0 || ballY + ballSize > c1Heihgt) {
			ballspeedY = -ballspeedY;
			speedUp();
		}
		// jeśli paletka uderzy górną połowa w piłkę
		if (((ballX < playerX + paddleWidth) && (middleBall > playerY && middleBall < playerY + paddleHeight / 2)) || ((ballX + ballSize > cpuX) && (middleBall > cpuY && middleBall < cpuY + paddleHeight / 2))) {
			ballY += 0.5;
		}
		// jesli piłka dotrze do krawędzi naszego stołu odbijamy ją zmieniając znak minus
		if ((ballX < playerX + paddleWidth) && (middleBall > playerY && middleBall < playerY + paddleHeight)) {
			ballspeedX = -ballspeedX;
			scorePlayer++;
		}
		if ((ballX + ballSize > cpuX) && (middleBall > cpuY && middleBall < cpuY + paddleHeight)) {
			// jesli piłka dotrze do krawędzi naszego stołu odbijamy ją zmieniając znak minus
			ballspeedX = -ballspeedX;
		} else if (ballX < playerX || ballX + ballSize > cpuX + paddleWidth) {
			return gameOveTen();
		}
	}

	function table() {
		c1.fillStyle = '#464a4e';
		c1.fillRect(0, 0, c1Width, c1Heihgt);
		c1.fillStyle = '#ffffff';
		// rysuję line na srodku boiska, za pomoca pętli for

		for (var i = 20; i < c1Heihgt; i += 30) {
			c1.fillStyle = '#5ccc00';
			c1.fillRect(c1Width / 2 - lineWidth / 2, i, lineWidth, lineHeight);
		}

	}

	function textOver() {
		var overWid = c1.measureText("Game").width;
		var gameWid = c1.measureText("Over").width;
		c1.font = "42pt Arial";
		c1.fillStyle = "#ffffff";
		c1.fillText("Game", c1Width / 2 - c1.measureText("Game").width - 20, 50);
		c1.fillText("Over", c1Width / 2 + 20, 50);
	}

	function game() {
		table();
		ball();
		player();
		//narysowanie paletki położenie początkowe cpuX cpuY, nastepnie położenie wyliczone w funkcji cpyPosition();
		cpu();
		//wyliczenie pozycji paletki komputera
		cpuPosition();
		score.innerHTML = scorePlayer;

	}
	//sprawdzamy odległośc jaka jest od początku okna przeglądarki do danego elementu, w wtym przypadku canvas

	var topCanvas1 = canvas1.offsetTop;

	//ruch paletek
	function playerPosition(e) {
		var topCanvas1 = canvas1.offsetTop;
		playerY = (e.clientY - topCanvas1) - (paddleHeight);

		//playerY = (e.clientY - topCanvas1) - (paddleHeight / 2);
		// zabezpiecznie, żeby paletka nie wyjezdzała poza Canvas

		if (playerY >= c1Heihgt - paddleHeight) {
			playerY = c1Heihgt - paddleHeight;
		}
		if (playerY < 0) {
			playerY = 0;
		}
		//cpuY = playerY;
	}
	// przyśpieszenie piłeczki
	// za każdym wywołaniem funkcji zmienia się wartośc speedball
	function speedUp() {
		//prędkość oś X
		if (ballspeedX > 0 && ballspeedX < 1) {
			ballspeedX += 0.3;

		} else if (ballspeedX < 0 && ballspeedX > -14) {
			ballspeedX -= 0.3;

		}
		//prędkość oś Y
		if (ballspeedY > 0 && ballspeedY < 14) {
			ballspeedY += 0.3;
		} else if (ballspeedY < 0 && ballspeedY > -14) {
			ballspeedY -= 0.3;

		}


	}
	canvas1.addEventListener("mousemove", playerPosition);

	//sztuczna inteligencja

	function cpuPosition() {
		var middlePaddle = cpuY + paddleHeight / 2;
		var middleBall = ballY + ballSize / 2;
		if (cpuY >= c1Heihgt - paddleHeight) {
			cpuY = c1Heihgt - paddleHeight;
		}
		if (cpuY < 0) {
			cpuY = 0;
		}
		if (ballX > 500) {
			if (middlePaddle - middleBall > 200) {
				cpuY -= 15;
			} else if (middlePaddle - middleBall > 50) {
				cpuY -= 10;
			}
			if (middlePaddle - middleBall < -200) {
				cpuY += 15;
			} else if (middlePaddle - middleBall < -50) {
				cpuY += 10;
			}
		} else if (ballX <= 500 && ballX < 150) {
			if (middlePaddle - middleBall > 100) {
				cpuY -= 5;
			} else if (middlePaddle - middleBall < -100) {
				cpuY += 5;
			}

		}
	}
	// funkcja, wywołująca co okreslony czas wywołanie funkcji, za każdym wywołaniem funkcji ballX +=ballspeedX;
	/* podajemy co ma sie wykonać i ile razy 1000ms / 50ms = 20 razy na 1s*/


	function playPlayer() {
		scorePlayer = 0;
		ballspeedX =4;
		ballspeedY = 4;
		ballX = c1Width / 2 - ballSize / 2; /* 490 do 510 */
		ballY = c1Heihgt / 2 - ballSize / 2; /*  240 do 260 */


		clearInterval(timeOutTenis);
		return timeOutTenis = setInterval(game, 50);
	}

	function gameOveTen() {
		//przywracam pilkę na pozycję początkowa
		ballX = c1Width / 2 - ballSize / 2; /* 490 do 510 */
		ballY = c1Heihgt / 2 - ballSize / 2;
		if (timeOutTenis) {
			textOver();
		}

		return clearInterval(timeOutTenis);
	}

	game();
	startTenis.addEventListener("click", playPlayer);
	gamOve.addEventListener("click", gameOveTen);
