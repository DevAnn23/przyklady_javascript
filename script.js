//Google Map

function initMap() {
	var uluru = {
		lat: 52.2296756,
		lng: 21.012228700000037
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

// DICE
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var counter = 1;
var suma_total = 0;
var suma;
var combo = 0;
var faceDice = document.getElementById("faceDice");
var comboField = document.querySelector('.combo')
var faceDice1 = document.getElementById("faceDice1");
var faceDice2 = document.getElementById("faceDice2");
var result = document.querySelector('.result');
var roundField = document.querySelector('.roundField');
var totalField = document.querySelector('.suma_total');

button2.onclick = function gameOver() {
	counter = 0;
	suma_total = 0;
	suma = 0;
	button1.innerHTML = "Rozpocznij grę";
	result.innerHTML = "Twój wynik to: " + suma;
	comboField.innerHTML = "";
	roundField.innerHTML = "Tura " + counter;
	totalField.innerHTML = "Suma " + suma_total;
}

button1.onclick = function roll() {
	var d1 = Math.floor(Math.random() * 6 + 1);
	var d2 = Math.floor(Math.random() * 6 + 1);
	var d3 = Math.floor(Math.random() * 6 + 1);
	if (d1 === d2 && d1 === d3 && d2 === d3) {
		comboField.innerHTML = "EXTRA +10 punktów";
		comboField.style.color = "red";
		combo = 10;
	} else {
		comboField.innerHTML = "";
		combo = 0;
	}
	counter++;
	suma = d1 + d2 + d3;
	suma_total += suma + combo;

	button1.innerHTML = "Rzut ";
	result.innerHTML = "Twój wynik to: " + suma;
	roundField.innerHTML = "Tura " + counter;
	totalField.innerHTML = "Suma " + suma_total;

	switch (d1) {
		case (1):
			faceDice.style.backgroundImage = "url('img/title_1.png')";
			break;
		case (2):
			faceDice.style.backgroundImage = "url('img/title_2.png')";
			break;
		case (3):
			faceDice.style.backgroundImage = "url('img/title_3.png')";
			break;
		case (4):
			faceDice.style.backgroundImage = "url('img/title_4.png')";
			break;
		case (5):
			faceDice.style.backgroundImage = "url('img/title_5.png')";
			break;
		case (6):
			faceDice.style.backgroundImage = "url('img/title_6.png')";
			break;
		default:
			faceDice.style.backgroundImage = 'none';
	}
	switch (d2) {
		case (1):
			faceDice1.style.backgroundImage = "url('img/title_1.png')";
			break;
		case (2):
			faceDice1.style.backgroundImage = "url('img/title_2.png')";
			break;
		case (3):
			faceDice1.style.backgroundImage = "url('img/title_3.png')";
			break;
		case (4):
			faceDice1.style.backgroundImage = "url('img/title_4.png')";
			break;
		case (5):
			faceDice1.style.backgroundImage = "url('img/title_5.png')";
			break;
		case (6):
			faceDice1.style.backgroundImage = "url('img/title_6.png')";
			break;
		default:
			faceDice1.style.backgroundImage = 'none';
	}
	switch (d3) {
		case (1):
			faceDice2.style.backgroundImage = "url('img/title_1.png')";
			break;
		case (2):
			faceDice2.style.backgroundImage = "url('img/title_2.png')";
			break;
		case (3):
			faceDice2.style.backgroundImage = "url('img/title_3.png')";
			break;
		case (4):
			faceDice2.style.backgroundImage = "url('img/title_4.png')";
			break;
		case (5):
			faceDice2.style.backgroundImage = "url('img/title_5.png')";
			break;
		case (6):
			faceDice2.style.backgroundImage = "url('img/title_6.png')";
			break;
		default:
			faceDice2.style.backgroundImage = 'none';
	}
};


// TOTOLOTEK
function drawNumber(number, ourNumber) {
	/* Math.floor zaokragla w dół, dlatego dodaje się 1*/
	var number = document.getElementsByClassName('number');
	var drawnNumbers = [];
	for (var i = 0; i < number.length; i++) {
		var ourNumber = Math.floor(Math.random() * 10 + 1);
		while (drawnNumbers.includes(ourNumber)) {
			ourNumber = Math.floor(Math.random() * 10 + 1);
		}
		drawnNumbers.push(ourNumber);
		number[i].innerHTML = ourNumber;
	}
};

window.onload = function () {
	function dateAndtime() {
		// dateAndtime
		var today = new Date();

		var ourDay = today.getDate();
		var ourWeekDay = today.getDay();
		var ourMonth = today.getMonth() + 1;
		var ourYear = today.getFullYear();
		var ourHour = today.getHours();
		var ourMinute = today.getMinutes();
		var ourSecond = today.getSeconds();
		var weekDay = document.getElementById('weekDay');
		var clock = document.getElementById("clock");
		var hour = document.getElementById("hour");
		//sprawdzanie dnia tygodnia

		var days = ["w niedzielę", "w poniedziałek", "we wtorek", "w środę", "w czwartek", "w piątek", "w sobotę"];

		function leadingZero(i) {
			return (i < 10) ? '0' + i : i; /* jesli liczba mniejsza od 10 - wypisz 0 + liczbę, w innym wypadku - wypisz liczbę*/
		};
		clock.innerHTML = leadingZero(ourDay) + "/" + leadingZero(ourMonth) + "/" + ourYear;
		hour.innerHTML = leadingZero(ourHour) + ':' + leadingZero(ourMinute) + ':' + leadingZero(ourSecond) + '<br>';
		weekDay.innerHTML = days[ourWeekDay];
	};

	dateAndtime();

	function animationDice() {
		this.className = "changeColor";
	}

	function changeColor() {
		this.className = "changeColor";
	}

	function changeColor2() {
		this.removeAttribute("class");
	}

	function enlargeFont() {
		var fontSize = parseInt(window.getComputedStyle(this).fontSize);
		this.style.fontSize = (++fontSize) + "px";
		exclamationMark.className = "cursor";
	}

	function confirmFontSize() {
		exclamationMark.removeEventListener("mousedown", enlargeFont);
		exclamationMark.removeAttribute("class");
	}
	var testData = document.getElementById("hour");
	var testData2 = document.getElementById("clock");
	var testData3 = document.getElementById("weekDay");
	var tablicaKolor = [testData, testData2, testData3];
	var exclamationMark = document.getElementById("exclamationMark");
	var stop = document.getElementById("stop");


	/* testData.onmouseover = changeColor;
	 testData2.onmouseover = changeColor;
	 testData.onmouseout = changeColor2;
	 testData2.onmouseout = changeColor2;*/

	//testData.addEventListener("mouseover", changeColor);
	//testData.addEventListener("mouseout", changeColor2);

	for (var i = 0; i < tablicaKolor.length; i++) {
		tablicaKolor[i].addEventListener("mouseover", changeColor);
		tablicaKolor[i].addEventListener("mouseout", changeColor2);
	}

	exclamationMark.addEventListener("mousedown", enlargeFont);
	stop.addEventListener("click", confirmFontSize);

	//silnia
	var result = 1;
	var factorialResult = document.getElementById('factorialResult');

	function factorial(n) {
		result = 1;
		for (var i = 1; i < n + 1; i++) {
			result *= i;
		}
		console.log(result);
		if (n === 0) {
			console.log(1);
			return;
		}
		factorialResult.innerHTML = result;
	}

	function factorial1() {

		var getNumber = document.getElementById('getNumber').value;

		factorial(parseInt(getNumber));

	};
	fact.addEventListener("click", factorial1);

	//kalkulator
	function calculator() {
		function substractionNumbers(num1, num2) {

			var num1 = document.getElementById('num1').value;
			var num2 = document.getElementById('num2').value;
			var resultOperation = document.getElementById('resultOperation');
			resultOperation.innerHTML = num1 - num2;
		}

		function additionNumbers(num1, num2) {

			var num1 = parseInt(document.getElementById('num1').value);
			var num2 = parseInt(document.getElementById('num2').value);
			var resultOperation = document.getElementById('resultOperation');

			resultOperation.innerHTML = num1 + num2;
			console.log(num2);
		}

		function multiplicationNumbers(num1, num2) {
			var num1 = document.getElementById('num1').value;
			var num2 = document.getElementById('num2').value;
			var resultOperation = document.getElementById('resultOperation');
			resultOperation.innerHTML = num1 * num2;

		}

		function divisionNumbers(x, y) {
			var num1 = document.getElementById('num1').value;
			var num2 = document.getElementById('num2').value;
			var resultOperation = document.getElementById('resultOperation');
			if (num2 == 0) {
				resultOperation.innerHTML = "Nie dzielimy przez 0";
				return;
			}
			resultOperation.innerHTML = (num1 / num2);
		}

		var substraction = document.getElementById('substraction');
		var addition = document.getElementById('addition');
		var multiplication = document.getElementById('multiplication');
		var division = document.getElementById('division');

		substraction.addEventListener("click", substractionNumbers);
		addition.addEventListener("click", additionNumbers);
		multiplication.addEventListener("click", multiplicationNumbers);
		division.addEventListener("click", divisionNumbers);
	};
	calculator();


	// ********* PRZYCISK - TO TOP PAGE

	var buttonTopPage = document.getElementById("buttonTopPage");
	buttonTopPage.onclick = function () {
		// - window.scrollBy(0, -100);/* wartości ujemne - do góry */
		window.scrollBy(0, -1 * window.pageYOffset);
	}

	// obsługa scroll- gdy scroll'ujemy, wywołujemy funkcję

	window.onscroll = function () {
		var test = document.getElementById("test");
		var buttonTopPage = document.getElementById("buttonTopPage");
		var yScrollAxis = Math.floor(window.pageYOffset);

		// przycisk nawigujący w górę pojawia sie od danej wartości px
		if (yScrollAxis > 100) {
			buttonTopPage.style.display = "block";
		} else {
			buttonTopPage.style.display = "none";
		}
		test.innerHTML = yScrollAxis;
	}
	buttonDownPage.onclick = function () {
		var przycisDown = document.getElementById("buttonDownPage");

		//pierwsza liczba w poziomie(x), druga w pionie(y)
		window.scrollBy(0, 100); /* wartości dodatnie dół*/
	};

	var email = document.getElementById("email");
	var submit = document.querySelector("#newsletter input[type='submit']");
	var tmp = document.getElementById("tmp");
	var email2 = document.getElementById("email2");
	var email3 = document.getElementById("email3");
	var tmp2 = document.getElementById("tmp2");
	var tmp3 = document.getElementById("tmp3");
	var tmp4 = document.getElementById("tmp4");

	submit.onclick = function (e) {

		tmp.style.display = "block";
		tmp.innerHTML = email.value;
		if (email.value === "" || email.value === " " || email2.value === "" || email2.value === " ") {
			tmp3.innerHTML = "Wypełnij wszystkie pola";
			tmp3.style.display = "block";
		}
		if (email2.value != email3.value) {
			tmp4.innerHTML = "Hasła są różne";
			tmp4.style.display = "block";
			tmp2.style.display = "block";
			tmp2.style.borderColor = "red";
			tmp3.style.borderColor = "red";
		} else {
			tmp4.innerHTML = "";
		}
		tmp2.innerHTML = email2.value;
		e.preventDefault();
		/* domyslnie  jak klikniemy wyślij to od razu wysyła i  zamyka formularz, żeby wyłączyć te domyślną akcję - e.preventDefault(); */
	};

	// Stoper
	/* Rozwiązanie z setTimeOut
		var timeOutStoper;
		// timeOutStoper musi być zmienną globalna

		function stopwatch(display, liczba) {

			display.innerHTML = liczba--;
			if (liczba < 0)
				return;

			timeOutStoper = setTimeout(function () {
				stopwatch(display, liczba);
			}, 1000);
			return timeOutStoper;
		}

		var initialValue = document.getElementById("initialValue");
		var buttonStart = document.getElementById("buttonStart");
		var buttonStop = document.getElementById("buttonStop");
		var display = document.getElementById("display");


		buttonStart.onclick = function () {
			var valueOnDisplay = initialValue.value;
			display.innerHTML = valueOnDisplay;

			if (timeOutStoper)
				clearTimeout(timeOutStoper);

			/*jeżeli timeOutStoper już istniał to czyści, jesli nie ma wartości - NaN - fałszwarunek niespełniony i przechodzi dalej
			timeOutStoper = stopwatch(display, valueOnDisplay);
		};
		buttonStop.onclick = function () {
			clearTimeout(timeOutStoper);
		};

	*/
	// stworzenie stopera metodą obiektową

	function stopWatchClass(display) {
		this.initialValue;
		this.display = display;
		this.timeOutRef = undefined;
		this.odpal = function (initialValue) {
			this.initialValue = initialValue;
			this.tableResults = [];
			this.partResult = document.getElementById("partResult");

			if (this.timeOutRef)
				clearTimeout(this.timeOutRef);

			this.startStoper();
		};
		this.startStoper = function () {

			this.display.innerHTML = this.initialValue--;


			var self = this; /* trzeba napisać zmienną, bo nie można się odwołac za pomocą this */
			this.timeOutRef = setTimeout(function () {
				if (self.initialValue < 0)
					return;

				self.startStoper();
			}, 1000);
		};
		this.stop = function () {

			clearTimeout(this.timeOutRef);
			tableResults.push(" " + (1 + stoper.initialValue));
			partResult.innerHTML = "Twoje partResult: " + tableResults;
		};
		this.continue = function () {
			this.startStoper();
		};
	}

	var initialValue = document.getElementById("initialValue").value;
	var buttonStart = document.getElementById("buttonStart");
	var buttonContinue = document.getElementById("buttonContinue");
	var buttonStop = document.getElementById("buttonStop");
	var display = document.getElementById("display");

	var tableResults = [];
	var partResult = document.getElementById("partResult");

	var stoper = new stopWatchClass(display);

	buttonStart.onclick = function () {
		var initialValue = document.getElementById("initialValue").value;
		stoper.odpal(initialValue);

	};
	buttonContinue.onclick = function () {
		stoper.continue();
	};

	buttonStop.onclick = function () {
		stoper.stop();
	};
	//Liczniki

	function register() {
		var initialValue1 = document.getElementById("initialValue1");
		var valueOnDisplay1 = initialValue1.value;
		var display1 = document.getElementById("display1");
		var span = document.getElementById("boom");
		display1.style.font = "26px Tahoma";
		display1.style.color = "#504a7d";


		function stopwatch1(display1, liczbaA) {

			display1.innerHTML = --liczbaA;

			if (liczbaA <= 0) {
				display1.style.display = "none";
				span.style.display = "block";
				return;
			}
			setTimeout(function () {
				stopwatch1(display1, liczbaA)
			}, 1000)
		}
		display1.innerHTML = valueOnDisplay1;
		setTimeout(function () {
			stopwatch1(display1, valueOnDisplay1);
		}, 1000);
	};

	function register2() {
		var initialValue2 = document.getElementById("initialValue2");
		var valueOnDisplay2 = initialValue2.value;
		var display2 = document.getElementById("display2");
		display2.style.font = "26px Tahoma";
		display2.style.color = "#504a67";


		function stopwatch2(display2, liczba2) {
			display2.innerHTML = ++liczba2;
			if (liczba2 >= 30) {
				return;
			}
			setTimeout(function () {
				stopwatch2(display2, liczba2)
			}, 100)
		}
		display2.innerHTML = valueOnDisplay2;
		setTimeout(function () {
			stopwatch2(display2, valueOnDisplay2);
		}, 500);
	}
	register();
	register2();

	// *********Licznik
	/*
		function stopwatch1(display1, liczbaA) {
			setTimeout(function () {
				stopwatch(display1, liczbaA);
			}, 1000);
			display1.innerHTML = ++liczbaA;
		}

		var initialValue1 = document.getElementById("initialValue1");
		var valueOnDisplay1 = initialValue1.value;
		var display1 = document.getElementById("display1");
		var span = document.getElementById("boom");


		var valueOnDisplay1 = initialValue1.value;
		display1.innerHTML = setTimeout(function () {
			var span = document.getElementById("boom");
			stopwatch1(display1, valueOnDisplay1);
		}, 1000);*/

	//********** przesuwany  ruchami myszki


	var picture = document.getElementById("picture");

	function pictureMove(e, move) {

		move.style.left = e.clientX - picture.width / 2 + "px";
		move.style.top = e.clientY - picture.height / 2 + "px"; /* e - obiekt, argument funkcji; client X,Y - położenie kursora*/

	}
	picture.onmousedown = function () {
		var self = this;
		var fixed = picture.style.position = "fixed";
		document.onmousemove = function (e) {
			var location = document.getElementById("location");
			location.innerHTML = " lokalizacja obrazka: " + e.clientX + " x " + e.clientY;
			pictureMove(e, self);
			fixed;
		};

	};
	/* teraz picture ucieka przy styczności kursora z lwym górnym rogiem, a ja chcę nim poruszać, na środku obrazka, dlatego odejmujemy połwę wartości szerokości obrazka- sprawdzam jaką picture ma szerokosć w właściwościach obrazka*/

	picture.onmouseup = function () {
		document.onmousemove = null;
	};
	picture.ondragstart = function (e) {
		e.preventDefault(); // wytłączenie domyślnego przesuwania, gdy puścimy to sie nie przes
	};


	//Rysowanie w canvas
	var canvas = document.getElementById('can');
	canvas.width = 600;
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



		//rysuję robota
		c.beginPath();

		c.fillStyle = '#aaa';
		c.fillRect(200, 100, 100, 100);
		c.beginPath();

		//rysuje czułka robota
		c.moveTo(250, 100);
		c.lineTo(200, 50);
		c.moveTo(250, 100);
		c.lineTo(300, 50);
		c.moveTo(190, 60);
		c.lineTo(210, 40);
		c.moveTo(310, 60);
		c.lineTo(290, 40);

		//nogi
		c.fillStyle = '#aaa';
		c.fillRect(230, 330, 10, 15);
		c.fillRect(260, 330, 10, 15);
		c.moveTo(260, 345);
		c.lineTo(280, 345);
		c.lineTo(270, 337);
		c.moveTo(240, 345);
		c.lineTo(220, 345);
		c.lineTo(230, 337);

		//ręce

		c.moveTo(300, 260);
		c.lineTo(310, 290);
		c.lineTo(300, 280);

		c.moveTo(200, 260);
		c.lineTo(190, 290);
		c.lineTo(200, 280);
		c.fill();
		//brwi

		c.moveTo(230, 110);
		c.lineTo(210, 115);
		c.moveTo(270, 110);
		c.lineTo(290, 115);

		//oczy
		c.fillStyle = '#fff';
		c.fillRect(220, 120, 10, 10);
		c.fillStyle = '#000';
		c.fillRect(222, 125, 5, 5);

		c.fillStyle = '#fff';
		c.fillRect(270, 120, 10, 10);
		c.fillStyle = '#000';
		c.fillRect(272, 125, 5, 5);

		//nos
		c.fillStyle = '#45000f';
		c.fillRect(245, 140, 10, 20);

		//zeby

		c.fillStyle = '#45000f';
		c.fillRect(205, 170, 90, 25);

		c.fillStyle = '#fff';
		c.fillRect(207, 170, 5, 3);
		c.fillStyle = '#fff';
		c.fillRect(217, 170, 5, 7);
		c.fillStyle = '#fff';
		c.fillRect(240, 170, 5, 9);
		c.fillStyle = '#fff';
		c.fillRect(257, 170, 5, 7);
		c.fillStyle = '#fff';
		c.fillRect(283, 170, 5, 2);
		c.fillStyle = '#fff';
		c.fillRect(277, 170, 5, 6);

		c.fillStyle = '#fff';
		c.fillRect(217, 195, 5, -7);
		c.fillStyle = '#fff';
		c.fillRect(257, 195, 5, -2);
		c.fillStyle = '#fff';
		c.fillRect(250, 195, 5, -7);
		c.fillStyle = '#fff';
		c.fillRect(280, 195, 5, -9);

		//szyja
		c.fillStyle = '#aaa';
		c.fillRect(240, 200, 20, 30);

		c.stroke();
		c.fillStyle = 'yellow';
		c.fillRect(200, 230, 100, 100);
		c.strokeRect(200, 230, 100, 100);
		c.fillStyle = 'red';
		c.fillRect(205, 235, 90, 90);
		c.fillStyle = 'pink';
		c.fillRect(210, 240, 80, 80);
		c.fillStyle = 'green';
		c.fillRect(215, 245, 70, 70);
		c.fillStyle = 'white';
		c.fillRect(220, 250, 60, 60);
		c.font = "italic bold 16px Arial";
		c.textBaseline = "bottom";
		c.strokeText('Canvas', 220, 280);
	}

	/* const - stała wartości stałe, nie bedą zmieniane, var lub let - zmienna - przypisanie wartości, ale będzie ona zmieniana na różnych etapach programu*/
	const canvas1 = document.getElementById('canvas1');
	const c1 = canvas1.getContext('2d'); /* pobieram zawartość canvas */
	canvas1.width = 1000;
	canvas1.height = 500;

	const c1Width = canvas1.width;
	const c1Heihgt = canvas1.height;
	const ballSize = 20; /*rozmiar piłki*/
	const paddleWidth = 20; /* wysokosc i szerokosc paletek */
	const paddleHeight = 100;
	const playerX = 70; /* położenie paletek oś X - wartość stała/ paletka gracza margines 70px */
	const cpuX = c1Width - (playerX + paddleWidth);
	const lineHeight = 16; /* linie na srodku boiska */
	const lineWidth = 6;

	//zmienne okreslające położenie piłki - poczatkowe
	var ballX = c1Width / 2 - ballSize / 2; /* 490 do 510 */
	var ballY = c1Heihgt / 2 - ballSize / 2; /*  240 do 260 */
	//zmienne określajace położenie paletek względem osi Y
	var playerY = 200;
	var cpuY = 200;
	// zmienne określające zmiany połozenia piłki
	var ballspeedX = 3;
	var ballspeedY = 3;

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
		c1.fillStyle = '#aaaaaa'
		c1.fillRect(ballX, ballY, ballSize, ballSize);
		//przy zmianie szybkości położenie piłki zmienia się o 1px

		ballX += ballspeedX;
		ballY += ballspeedY;

		if (ballY <= 0 || ballY + ballSize > c1Heihgt) {
			ballspeedY = -ballspeedY;
		}
		if (ballX <= 0 || ballX + ballSize > c1Width) { // jesli piłka dotrze ddo krawędzi naszego stołu odbijamy ją zmieniając znak minus
			ballspeedX = -ballspeedX;
		}
	}

	function table() {
		c1.fillStyle = '#000000';
		c1.fillRect(0, 0, c1Width, c1Heihgt);
		c1.fillStyle = '#ffffff';
		// rysuję line na srodku boiska, za pomoca pętli for

		for (var i = 20; i < c1Heihgt; i += 30) {
			c1.fillStyle = '#5ccc00';
			c1.fillRect(c1Width / 2 - lineWidth / 2, i, lineWidth, lineHeight);
		}
	}

	function game() {

		table();
		ball();
		player();
		cpu();
	}

	// funkcja, wywołująca co okreslony czas wywołanie funkcji, za każdym wywołaniem funkcji ballX +=ballspeedX;
	/* podajemy co ma sie wykonać i ile razy 1000ms / 50ms = 20 razy na 1s*/
	function boiskoPlayer() {
		setInterval(game, 50);
	}
	//sprawdzamy odległośc jaka jest od początku okna przeglądarki do danego elementu, w wtym przypadku canvas

	var topCanvas1 = canvas1.offsetTop;
	console.log("odległośc canvas od początku strony to " + topCanvas1);
	//ruch paletek
	function playerPosition(e) {
		console.log(e);
	}
	canvas1.addEventListener("mousemove", playerPosition);

	boiskoPlayer();
};
