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
var przod = document.getElementById("przod");
var comboPole = document.querySelector('.combo')
var przod1 = document.getElementById("przod1");
var przod2 = document.getElementById("przod2");
var wynik = document.querySelector('.wynik');
var licznik = document.querySelector('.licznik');
var sumaTotalPole = document.querySelector('.suma_total');

button2.onclick = function gameOver() {
	counter = 0;
	suma_total = 0;
	suma = 0;
	button1.innerHTML = "Rozpocznij grę";
	wynik.innerHTML = "Twój wynik to: " + suma;
	comboPole.innerHTML = "";
	licznik.innerHTML = "Tura " + counter;
	sumaTotalPole.innerHTML = "Suma " + suma_total;
}

button1.onclick = function roll() {
	var d1 = Math.floor(Math.random() * 6 + 1);
	var d2 = Math.floor(Math.random() * 6 + 1);
	var d3 = Math.floor(Math.random() * 6 + 1);
	if (d1 === d2 && d1 === d3 && d2 === d3) {
		comboPole.innerHTML = "EXTRA +10 punktów";
		comboPole.style.color = "red";
		combo = 10;
	} else {
		comboPole.innerHTML = "";
		combo = 0;
	}
	counter++;
	suma = d1 + d2 + d3;
	suma_total += suma + combo;


	button1.innerHTML = "Rzut ";
	wynik.innerHTML = "Twój wynik to: " + suma;
	licznik.innerHTML = "Tura " + counter;
	sumaTotalPole.innerHTML = "Suma " + suma_total;

	switch (d1) {
		case (1):
			przod.style.backgroundImage = "url('img/title_1.png')";
			break;
		case (2):
			przod.style.backgroundImage = "url('img/title_2.png')";
			break;
		case (3):
			przod.style.backgroundImage = "url('img/title_3.png')";
			break;
		case (4):
			przod.style.backgroundImage = "url('img/title_4.png')";
			break;
		case (5):
			przod.style.backgroundImage = "url('img/title_5.png')";
			break;
		case (6):
			przod.style.backgroundImage = "url('img/title_6.png')";
			break;
		default:
			przod.style.backgroundImage = 'none';
	}
	switch (d2) {
		case (1):
			przod1.style.backgroundImage = "url('img/title_1.png')";
			break;
		case (2):
			przod1.style.backgroundImage = "url('img/title_2.png')";
			break;
		case (3):
			przod1.style.backgroundImage = "url('img/title_3.png')";
			break;
		case (4):
			przod1.style.backgroundImage = "url('img/title_4.png')";
			break;
		case (5):
			przod1.style.backgroundImage = "url('img/title_5.png')";
			break;
		case (6):
			przod1.style.backgroundImage = "url('img/title_6.png')";
			break;
		default:
			przod1.style.backgroundImage = 'none';
	}
	switch (d3) {
		case (1):
			przod2.style.backgroundImage = "url('img/title_1.png')";
			break;
		case (2):
			przod2.style.backgroundImage = "url('img/title_2.png')";
			break;
		case (3):
			przod2.style.backgroundImage = "url('img/title_3.png')";
			break;
		case (4):
			przod2.style.backgroundImage = "url('img/title_4.png')";
			break;
		case (5):
			przod2.style.backgroundImage = "url('img/title_5.png')";
			break;
		case (6):
			przod2.style.backgroundImage = "url('img/title_6.png')";
			break;
		default:
			przod2.style.backgroundImage = 'none';
	}
};


// TOTOLOTEK
function totolotek(liczba, wylosowanaLiczba) {
	/* Math.floor zaokragla w dół, dlatego dodaje się 1*/
	var liczba = document.getElementsByClassName('liczba');
	var wylosowaneLiczby = [];
	for (var i = 0; i < liczba.length; i++) {
		var wylosowanaLiczba = Math.floor(Math.random() * 10 + 1);
		while (wylosowaneLiczby.includes(wylosowanaLiczba)) {
			wylosowanaLiczba = Math.floor(Math.random() * 10 + 1);
		}
		wylosowaneLiczby.push(wylosowanaLiczba);
		console.log('wylosowanaLiczba: ' + wylosowanaLiczba + '\n' + 'wylosowaneLiczby: ' + wylosowaneLiczby);
		liczba[i].innerHTML = wylosowanaLiczba;
	}

}

window.onload = function () {
	function dataIczas() {
		// data
		var dzisiaj = new Date();

		var dzien = dzisiaj.getDate();
		var dzienTygodnia = dzisiaj.getDay();
		var miesiac = dzisiaj.getMonth() + 1;
		var rok = dzisiaj.getFullYear();
		var godzina = dzisiaj.getHours();
		var minuta = dzisiaj.getMinutes();
		var sekunda = dzisiaj.getSeconds();
		var odpDzien = document.getElementById('odpDzienTygodnia');
		var zegar = document.getElementById("zegar");
		var czas = document.getElementById("godzina");
		//sprawdzanie dnia tygodnia

		var days = ["niedzielę", "poniedziałek", "wtorek", "środę", "czwartek", "piątek", "sobotę"];



		function leadingZero(i) {
			return (i < 10) ? '0' + i : i; /* jesli liczba mniejsza od 10 - wypisz 0 + liczbę, w innym wypadku - wypisz liczbę*/
		};

		zegar.innerHTML = leadingZero(dzien) + "/" + leadingZero(miesiac) + "/" + rok;
		czas.innerHTML = leadingZero(godzina) + ':' + leadingZero(minuta) + ':' + leadingZero(sekunda) + '<br>';
		odpDzien.innerHTML = days[dzienTygodnia];

	};

	dataIczas();


	function zmienKolor() {
		this.className = "zmienKolor";
	}

	function zmienKolor2() {
		this.removeAttribute("class");
	}

	function powiekszCzcionke() {
		var fontSize = parseInt(window.getComputedStyle(this).fontSize);
		this.style.fontSize = (++fontSize) + "px";
		wykrzyknik.className = "cursor";
	}

	function zastopujPowiekszanie() {
		wykrzyknik.removeEventListener("mousedown", powiekszCzcionke);
		wykrzyknik.removeAttribute("class");
	}
	var testowy = document.getElementById("godzina");
	var testowy2 = document.getElementById("zegar");
	var testowy3 = document.getElementById("odpDzienTygodnia");
	var tablicaKolor = [testowy, testowy2, testowy3];
	var wykrzyknik = document.getElementById("wykrzyknik");
	var stop = document.getElementById("stop");


	/* testowy.onmouseover = zmienKolor;
	 testowy2.onmouseover = zmienKolor;
	 testowy.onmouseout = zmienKolor2;
	 testowy2.onmouseout = zmienKolor2;*/

	//testowy.addEventListener("mouseover", zmienKolor);
	//testowy.addEventListener("mouseout", zmienKolor2);

	for (var i = 0; i < tablicaKolor.length; i++) {
		tablicaKolor[i].addEventListener("mouseover", zmienKolor);
		tablicaKolor[i].addEventListener("mouseout", zmienKolor2);
	}

	wykrzyknik.addEventListener("mousedown", powiekszCzcionke);
	stop.addEventListener("click", zastopujPowiekszanie);


	//kalkulator
function kalkulator() {

	function odejmowanieLiczb(num1, num2) {

		var num1 = document.getElementById('num1').value;
		var num2 = document.getElementById('num2').value;
var wynik = document.getElementById('wynikDzialania');
		wynik.innerHTML = num1 - num2;
	}

	function dodawanieLiczb(x, y) {
parseInt(document.getElementById('num2').value);
parseInt(document.getElementById('num2').value);
		var num1 = parseInt(document.getElementById('num1').value);
		var num2 = parseInt(document.getElementById('num2').value);
		var wynik = document.getElementById('wynikDzialania');
		wynik.innerHTML = num1 + num2;

	}

	function mnozenieLiczb(num1, num2) {
var num1 = document.getElementById('num1').value;
		var num2 = document.getElementById('num2').value;
		var wynikDzialania = document.getElementById('wynikDzialania');
		var wynik = document.getElementById('wynikDzialania');
		wynik.innerHTML = num1 * num2;

	}

	function dzielenieLiczb(x, y) {

		var num1 = document.getElementById('num1').value;
		var num2 = document.getElementById('num2').value;
		var wynik = document.getElementById('wynikDzialania');
		wynik.innerHTML = num1 + num2;
if (num2 == 0) {
			wynik.innerHTML = "nie dzielimy przez 0";
	return;
		}
		wynik.innerHTML = (num1 / num2);

	}
	var odejmowanie = document.getElementById('odejmowanie');
	var dodawanie = document.getElementById('dodawanie');
	var mnozenie = document.getElementById('mnozenie');
	var dzielenie = document.getElementById('dzielenie');

	odejmowanie.addEventListener("click", odejmowanieLiczb);
	dodawanie.addEventListener("click", dodawanieLiczb);
	mnozenie.addEventListener("click", mnozenieLiczb);
	dzielenie.addEventListener("click", dzielenieLiczb);


};
	kalkulator();


	// ********* PRZYCISK - TO TOP PAGE

	var przyciskTop = document.getElementById("przyciskTop");
	przyciskTop.onclick = function () {
		// - window.scrollBy(0, -100);/* wartości ujemne - do góry */
		window.scrollBy(0, -1 * window.pageYOffset);
	}

	// obsługa scroll- gdy scroll'ujemy, wywołujemy funkcję

	window.onscroll = function () {
		var test = document.getElementById("test");
		var przyciskTop = document.getElementById("przyciskTop");
		var yScrollAxis = Math.floor(window.pageYOffset);

		// przycisk nawigujący w górę pojawia sie od danej wartości px
		if (yScrollAxis > 100) {
			przyciskTop.style.display = "block";
		} else {
			przyciskTop.style.display = "none";
		}
		test.innerHTML = yScrollAxis;
	}
	przyciskDown.onclick = function () {
		var przycisDown = document.getElementById("przyciskDown");

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

		function stopwatch(uchwytStopera, liczba) {

			uchwytStopera.innerHTML = liczba--;
			if (liczba < 0)
				return;

			timeOutStoper = setTimeout(function () {
				stopwatch(uchwytStopera, liczba);
			}, 1000);
			return timeOutStoper;
		}

		var poczatkowaWartosc = document.getElementById("poczatkowaWartosc");
		var przyciskWlacz = document.getElementById("przyciskWlacz");
		var przyciskZatrzymaj = document.getElementById("przyciskZatrzymaj");
		var uchwytStopera = document.getElementById("uchwytStopera");


		przyciskWlacz.onclick = function () {
			var poczatkowaValue = poczatkowaWartosc.value;
			uchwytStopera.innerHTML = poczatkowaValue;

			if (timeOutStoper)
				clearTimeout(timeOutStoper);

			/*jeżeli timeOutStoper już istniał to czyści, jesli nie ma wartości - NaN - fałszwarunek niespełniony i przechodzi dalej
			timeOutStoper = stopwatch(uchwytStopera, poczatkowaValue);
		};
		przyciskZatrzymaj.onclick = function () {
			clearTimeout(timeOutStoper);
		};

	*/
	// stworzenie stopera metodą obiektową

	function stopWatchClass(uchwytStopera) {
		this.poczatkowaWartosc;
		this.uchwytStopera = uchwytStopera;
		this.timeOutRef = undefined;
		this.odpal = function (poczatkowaWartosc) {
			this.poczatkowaWartosc = poczatkowaWartosc;
			this.tablicaWynikow = [];
			this.wyniki = document.getElementById("wyniki");

			if (this.timeOutRef)
				clearTimeout(this.timeOutRef);

			this.startStoper();
		};
		this.startStoper = function () {

			this.uchwytStopera.innerHTML = this.poczatkowaWartosc--;


			var self = this; /* trzeba napisać zmienną, bo nie można się odwołac za pomocą this */
			this.timeOutRef = setTimeout(function () {
				if (self.poczatkowaWartosc < 0)
					return;

				self.startStoper();
			}, 1000);
		};
		this.zatrzymaj = function () {

			clearTimeout(this.timeOutRef);
			tablicaWynikow.push(" " + (1 + stoper.poczatkowaWartosc));
			wyniki.innerHTML = "Twoje wyniki: " + tablicaWynikow;
		};
		this.kontynuuj = function () {
			this.startStoper();
		};
	}

	var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
	var przyciskWlacz = document.getElementById("przyciskWlacz");
	var przyciskKontynuuj = document.getElementById("przyciskKontynuuj");
	var przyciskZatrzymaj = document.getElementById("przyciskZatrzymaj");
	var uchwytStopera = document.getElementById("uchwytStopera");

	var tablicaWynikow = [];
	var wyniki = document.getElementById("wyniki");

	var stoper = new stopWatchClass(uchwytStopera);

	przyciskWlacz.onclick = function () {
		var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
		stoper.odpal(poczatkowaWartosc);

	};
	przyciskKontynuuj.onclick = function () {
		stoper.kontynuuj();
	};

	przyciskZatrzymaj.onclick = function () {
		stoper.zatrzymaj();
	};
	//Liczniki

	function licznik() {
		var poczatkowaWartosc1 = document.getElementById("poczatkowaWartosc1");
		var poczatkowaValue1 = poczatkowaWartosc1.value;
		var uchwytStopera1 = document.getElementById("uchwytStopera1");
		var span = document.getElementById("boom");
		uchwytStopera1.style.font = "26px Tahoma";
		uchwytStopera1.style.color = "#504a7d";


		function stopwatch1(uchwytStopera1, liczbaA) {

			uchwytStopera1.innerHTML = --liczbaA;

			if (liczbaA <= 0) {
				uchwytStopera1.style.display = "none";
				span.style.display = "block";
				return;

			}

			setTimeout(function () {
				stopwatch1(uchwytStopera1, liczbaA)
			}, 1000)
		}


		uchwytStopera1.innerHTML = poczatkowaValue1;
		setTimeout(function () {
			stopwatch1(uchwytStopera1, poczatkowaValue1);
		}, 1000);
	};

	function licznik2() {
		var poczatkowaWartosc2 = document.getElementById("poczatkowaWartosc2");
		var poczatkowaValue2 = poczatkowaWartosc2.value;
		var uchwytStopera2 = document.getElementById("uchwytStopera2");
		uchwytStopera2.style.font = "26px Tahoma";
		uchwytStopera2.style.color = "#504a67";


		function stopwatch2(uchwytStopera2, liczba2) {

			uchwytStopera2.innerHTML = ++liczba2;

			if (liczba2 >= 30) {
				return;
			}

			setTimeout(function () {
				stopwatch2(uchwytStopera2, liczba2)
			}, 100)
		}


		uchwytStopera2.innerHTML = poczatkowaValue2;
		setTimeout(function () {
			stopwatch2(uchwytStopera2, poczatkowaValue2);
		}, 500);
	}
	licznik();
	licznik2();

	// *********Licznik
	/*
		function stopwatch1(uchwytStopera1, liczbaA) {
			setTimeout(function () {
				stopwatch(uchwytStopera1, liczbaA);
			}, 1000);
			uchwytStopera1.innerHTML = ++liczbaA;
		}

		var poczatkowaWartosc1 = document.getElementById("poczatkowaWartosc1");
		var poczatkowaValue1 = poczatkowaWartosc1.value;
		var uchwytStopera1 = document.getElementById("uchwytStopera1");
		var span = document.getElementById("boom");


		var poczatkowaValue1 = poczatkowaWartosc1.value;
		uchwytStopera1.innerHTML = setTimeout(function () {
			var span = document.getElementById("boom");
			stopwatch1(uchwytStopera1, poczatkowaValue1);
		}, 1000);*/

	//********** przesuwany  ruchami myszki



	var obrazek = document.getElementById("obrazek");

	function ruchObrazka(e, obr) {

		obr.style.left = e.clientX - obrazek.width / 2 + "px";
		obr.style.top = e.clientY - obrazek.height / 2 + "px"; /* e - obiekt, argument funkcji; client X,Y - położenie kursora*/

	}
	obrazek.onmousedown = function () {
		var self = this;
		var fixed = obrazek.style.position = "fixed";
		document.onmousemove = function (e) {
			var lokalizacja = document.getElementById("lokalizacja");
			lokalizacja.innerHTML = " Lokalizacja obrazka: " + e.clientX + " x " + e.clientY;
			ruchObrazka(e, self);
			fixed;
		};

	};
	/* teraz obrazek ucieka przy styczności kursora z lwym górnym rogiem, a ja chcę nim poruszać, na środku obrazka, dlatego odejmujemy połwę wartości szerokości obrazka- sprawdzam jaką obrazek ma szerokosć w właściwościach obrazka*/

	obrazek.onmouseup = function () {
		document.onmousemove = null;
	};
	obrazek.ondragstart = function (e) {
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
