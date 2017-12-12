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
	// data
	var dzisiaj = new Date();

	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth() + 1;
	var rok = dzisiaj.getFullYear();
	var godzina = dzisiaj.getHours();
	var minuta = dzisiaj.getMinutes();
	var sekunda = dzisiaj.getSeconds();
	var zegar = document.getElementById("zegar");
	var czas = document.getElementById("godzina");

	function leadingZero(i) {
		return (i < 10) ? '0' + i : i; /* jesli liczba mniejsza od 10 - wypisz 0 + liczbę, w innym wypadku - wypisz liczbę*/
	}

	zegar.innerHTML = leadingZero(dzien) + "/" + leadingZero(miesiac) + "/" + rok;
	czas.innerHTML = leadingZero(godzina) + ':' + leadingZero(minuta) + ':' + leadingZero(sekunda) + '<br>';



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
	var wykrzyknik = document.getElementById("wykrzyknik");
	var stop = document.getElementById("stop");


	/* testowy.onmouseover = zmienKolor;
	 testowy2.onmouseover = zmienKolor;
	 testowy.onmouseout = zmienKolor2;
	 testowy2.onmouseout = zmienKolor2;*/

	testowy.addEventListener("mouseover", zmienKolor);
	testowy.addEventListener("mouseout", zmienKolor2);
	testowy2.addEventListener("mouseover", zmienKolor);
	testowy2.addEventListener("mouseout", zmienKolor2);
	wykrzyknik.addEventListener("mousedown", powiekszCzcionke);
	stop.addEventListener("click", zastopujPowiekszanie);







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

		if(this.timeOutRef)
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
	przyciskKontynuuj.onclick = function(){
		stoper.kontynuuj();
	};

	przyciskZatrzymaj.onclick = function(){
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
};
