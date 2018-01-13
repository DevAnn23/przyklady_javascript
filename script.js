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
			result = 1;
			return;
		}
		if (n < 0) {
			result = "Wpisz liczbę naturalną."
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
			var num1 = document.getElementById('num1').value.toString().replace(",", ".");
			var num2 = document.getElementById('num2').value.toString().replace(",", ".");
			var num1Int = parseFloat(num1);
			var num2Int = parseFloat(num2);
			var resultOperation = document.getElementById('resultOperation');
			if (num1 === "" || num2 === "") {
				resultOperation.innerHTML = "Wpisz obie liczby";
			} else {
				resultOperation.innerHTML = num1Int - num2Int;
			}
		}

		function additionNumbers(num1, num2) {
			var num1 = document.getElementById('num1').value.toString().replace(",", ".");
			var num2 = document.getElementById('num2').value.toString().replace(",", ".");
			var num1Int = parseFloat(num1);
			var num2Int = parseFloat(num2);
			var resultOperation = document.getElementById('resultOperation');
			if (num1 === "" || num2 === "") {
				console.log("puste1");
				resultOperation.innerHTML = "Wpisz obie liczby";
			} else {
				resultOperation.innerHTML = num1Int + num2Int;
			}

		}

		function multiplicationNumbers(num1, num2) {
			var num1 = document.getElementById('num1').value.toString().replace(",", ".");
			var num2 = document.getElementById('num2').value.toString().replace(",", ".");
			var num1Int = parseFloat(num1);
			var num2Int = parseFloat(num2);
			var resultOperation = document.getElementById('resultOperation');
			if (num1 === "" || num2 === "") {
				resultOperation.innerHTML = "Wpisz obie liczby";
			} else {
				resultOperation.innerHTML = num1Int * num2Int;
			}


		}

		function divisionNumbers(num1, num2) {
			var num1 = document.getElementById('num1').value.toString().replace(",", ".");
			var num2 = document.getElementById('num2').value.toString().replace(",", ".");
			var num1Int = parseFloat(num1);
			var num2Int = parseFloat(num2);
			var resultOperation = document.getElementById('resultOperation');
			if (num1 === "" || num2 === "") {
				return resultOperation.innerHTML = "Wpisz obie liczby";
			}
			if (num2 === "0") {
				resultOperation.innerHTML = "Nie dzielimy przez 0";

			} else {
				resultOperation.innerHTML = num1Int / num2Int;
			}
		}



		var substraction = document.getElementById('substraction');
		var addition = document.getElementById('addition');
		var multiplication = document.getElementById('multiplication');
		var division = document.getElementById('division');

		substraction.addEventListener("click", substractionNumbers);
		addition.addEventListener("click", additionNumbers);
		multiplication.addEventListener("click", multiplicationNumbers);
		division.addEventListener("click", divisionNumbers);
	}
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

	function validForm() {
		var labelAdd = document.querySelector('#labelAdd');
		var phoneField = document.querySelector('.form').phone;
		var emailField = document.querySelector('.form').email;
		var messageField = document.querySelector('.form').message;
		var fieldAddition = document.querySelector('.form').fieldAddition;
		var formButton = document.querySelector('.form-button');
		var tooltipSend = document.getElementById('tooltipSend');
		var tooltipNumber = document.getElementById('tooltipNumber');
		var tooltipAdd = document.getElementById('tooltipAdd');
		var tooltipEmail = document.getElementById('tooltipEmail');
		var isOkEmail = true;
		var isOkAdd = true;
		var isOkPhone = true;

		function addNumber() {
			var num1 = Math.floor(Math.random() * 10);
			var num2 = Math.floor(Math.random() * 10);

			labelAdd.innerHTML = num1 + "+" + num2;

			fieldAddition.onkeyup = function (e) {
				if (parseInt(fieldAddition.value) === num1 + num2 && parseInt(fieldAddition.value) != null) {
					isOkAdd = true;

				} else {
					isOkAdd = false;
				}
			}
		}
		addNumber();

		function addEmail() {
			emailField.onblur = function (e) {

				if (this.value && !(this.value.includes("@") && this.value.includes(".") && !this.value.includes(" "))) {
					isOkEmail = false;
					tooltipEmail.innerHTML = "Invalid email";
					console.log('małpa i kropka');
				} else {
					isOkEmail = true;
					console.log("ioppp");
					tooltipEmail.innerHTML = "";
				}
			}
		}
		addEmail();
		function enterNumber() {
		phoneField.onblur = function (e) {
				if (this.value && (e.which === 32 || isNaN(this.value))) { // 32 kod klawisza spacji
					tooltipNumber.innerHTML = "Invalid number";
					isOkPhone = false;

				} else {
					tooltipNumber.innerHTML = "";
					isOkPhone = true;
				}
			}
		}
		enterNumber();
		formButton.onclick = function (e) {
			if (!isOkEmail || !isOkPhone || !isOkAdd) {
				e.preventDefault();
				tooltipSend.innerHTML = "Incorrect data";
			} else {
				tooltipSend.innerHTML = "";
			}

		}
	}
	validForm();




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

			/*jeżeli timeOutStoper już istniał to czyści, jesli nie ma wartości - NaN - fałsz warunek niespełniony i przechodzi dalej
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
			var self = this; /* trzeba napisać zmienną, bo nie można się odwołac za pomocą this */

			this.display.innerHTML = this.initialValue--;
			this.timeOutRef = setTimeout(function () {
				if (self.initialValue < 0)
					return;

				self.startStoper();
			}, 1000);




		};
		this.stop = function () {

			clearTimeout(this.timeOutRef);
			if (stoper.initialValue + 1 >= 0) {
				tableResults.push(" " + (1 + stoper.initialValue));
			}

			partResult.innerHTML = "Twoje wyniki: " + tableResults;
		};
		this.continue = function () {

			if (this.display.innerHTML > 0) {
				this.startStoper();
			}
			//if (initialValue == false)
			else {
				this.display.innerHTML = "Wpisz liczbę dodatnia i włącz stoper.";
			}
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
	var timeOutRegister;
	var startRegister = document.getElementById("startRegister");


	function register() {
		var initialValue1 = document.getElementById("initialValue1");
		var valueOnDisplay1 = initialValue1.value;
		var display1 = document.getElementById("display1");
		var span = document.getElementById("boom");
		display1.style.font = "26px Tahoma";
		display1.style.color = "#504a7d";


		function stopwatch1(display1, liczbaA) {
			clearTimeout(timeOutRegister);
			display1.style.display = "block";
			span.style.display = "none";
			display1.innerHTML = --liczbaA;

			if (liczbaA <= 0) {
				display1.style.display = "none";
				span.style.display = "block";
				return;
			}
			timeOutRegister = setTimeout(function () {
				stopwatch1(display1, liczbaA)
			}, 1000)
		}
		display1.innerHTML = valueOnDisplay1;
		timeOutRegister = setTimeout(function () {
			stopwatch1(display1, valueOnDisplay1);
		}, 1000);

	};


	var timeOutRegister2;

	function register2() {
		var initialValue2 = document.getElementById("initialValue2");
		var valueOnDisplay2 = initialValue2.value;
		var display2 = document.getElementById("display2");
		display2.style.font = "26px Tahoma";
		display2.style.color = "#504a67";


		function stopwatch2(display2, liczba2) {
			clearTimeout(timeOutRegister2);

			display2.innerHTML = ++liczba2;
			if (liczba2 >= 30) {
				return;
			}
			timeOutRegister2 = setTimeout(function () {
				stopwatch2(display2, liczba2)
			}, 100)
		}
		display2.innerHTML = valueOnDisplay2;
		timeOutRegister2 = setTimeout(function () {
			stopwatch2(display2, valueOnDisplay2);
		}, 500);
	}

	function functionsRegister() {
		register();
		register2();
	}
	startRegister.addEventListener("click", functionsRegister);


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

		var robotX = 200;
		var robotY = 100;
		var robotHeight = 100;
		var robotWidth = 100;
		var eyeHeight = 4;

		//rysuję robota
		function bodyRobot() {
			c.fillStyle = '#aaa';
			c.fillRect(robotX, robotY, robotWidth, robotHeight);

		}

		function antennas() {
			//rysuje czułka robota
			c.moveTo(250, 100);
			c.lineTo(200, 50);
			c.moveTo(250, 100);
			c.lineTo(300, 50);

			c.moveTo(190, 60);
			c.lineTo(210, 40);
			c.moveTo(310, 60);
			c.lineTo(290, 40);

		}

		function legs() {
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
		}


		function arm() {
			//ręce
			c.moveTo(300, 260);
			c.lineTo(310, 290);
			c.lineTo(300, 280);

			c.moveTo(200, 260);
			c.lineTo(190, 290);
			c.lineTo(200, 280);
			c.fill();

		}

		function eyebrow() {
			//brwi

			c.moveTo(230, 110);
			c.lineTo(210, 115);
			c.moveTo(270, 110);
			c.lineTo(290, 115);
		}

		function eye() {
			//oczy

			c.fillStyle = '#fff';
			c.fillRect(220, 120, 10, 10);
			c.fillStyle = '#4c5763';
			c.fillRect(220, 120, 10, eyeHeight);
			c.fillStyle = '#4c576373';
			c.fillRect(222, 125, 5, 5);

			c.fillStyle = '#fff';
			c.fillRect(270, 120, 10, 10);
			c.fillStyle = '#4c5763';
			c.fillRect(270, 120, 10, eyeHeight);
			c.fillStyle = '#4c576373';
			c.fillRect(272, 125, 5, 5);
			if (eyeHeight > 8) {
				eyeHeight = 2;
			}
			eyeHeight += 4;
		}

		function nose() {
			//nos
			c.fillStyle = '#45000f';
			c.fillRect(245, 140, 10, 20);

		}

		function teeth() {

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
		}

		function neck() {
			//szyja
			c.fillStyle = '#aaa';
			c.fillRect(240, 200, 20, 30);
			c.stroke();
			c.fillStyle = '#ffffff';
			c.fillRect(200, 230, 100, 100);
			c.strokeRect(200, 230, 100, 100);
			c.fillStyle = '#2ac5f0';
			c.fillRect(205, 235, 90, 90);
			c.fillStyle = '#a0151a';
			c.fillRect(210, 240, 80, 80);
			c.fillStyle = '#11da70';
			c.fillRect(215, 245, 70, 70);
			c.fillStyle = '#ffffff';
			c.fillRect(220, 250, 60, 60);
			c.font = "italic bold 16px Arial";
			c.textBaseline = "bottom";
			c.strokeText('Canvas', 220, 288);
		}

		function robot() {
			bodyRobot();
			antennas();
			legs();
			arm();
			eyebrow();
			eye();
			nose();
			teeth();
			neck();
		}
		robot();

		function closeEye() {
			setInterval(eye, 2500);
		}
		closeEye();
	};


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
	var ballspeedX = 2;
	var ballspeedY = 2;


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
			console.log("ballspeedY to" +  ballspeedY + "a ballY to" + ballY);
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
		var overWid = c1.measureText("Koniec").width;
		var gameWid = c1.measureText("Gry").width;
		c1.font = "42pt Times New Roman";
		c1.fillStyle = "#ffffff";
		c1.fillText("Koniec", c1Width / 2 - c1.measureText("Koniec").width - 20, 50);
		c1.fillText("Gry", c1Width / 2 + 20, 50);




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
		//console.log(ballspeedY + " " + ballspeedX);

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
		ballspeedX = 2;
		ballspeedY = 2;
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

	//ustawienie, zeby strona nie zjeżdzała w dół przy otwieraniu
	window.scrollBy(0, -1 * window.pageYOffset);
};
