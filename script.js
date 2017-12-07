
// DICE 
var counter = 1;
var tura = counter + 1;
var suma_total = 0;

function roll() {
	var combo = 0;
	var tab = [przod, przod1, przod2];
	var d1 = Math.floor(Math.random() * 6 + 1);
	var d2 = Math.floor(Math.random() * 6 + 1);
	var d3 = Math.floor(Math.random() * 6 + 1);
	var suma = d1 + d2 + d3;
	var button = document.querySelector('#button1');

	if (d1 === d2 && d1 === d3 && d2 === d3) {
		document.querySelector('.combo').innerHTML = "EXTRA +10 punktów";
		document.querySelector('.combo').style.color = "red";
		combo = 10;



	} else {
		document.querySelector('.combo').innerHTML = "";
		combo = 0;
	}
	counter++;
	suma_total += suma + combo;

	button.innerHTML = "Rzut ";
	document.querySelector('.wynik').innerHTML = "Twój wynik to: " + suma;
	document.querySelector('.licznik').innerHTML = "Tura " + counter;
	document.querySelector('.suma_total').innerHTML = "Suma " + suma_total;

	switch (d1) {
		case (1):
			przod.style.backgroundImage = "url('img/title_1.png')";
			ani();
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

}
// TOTOLOTEK
function totolotek() {
	/* Math.floor zaokragla w dół, dlatego dodaje się 1*/
	var liczba = document.getElementsByClassName('liczba');


	for (var i = 0; i < liczba.length; i++) {
		liczba[i].innerHTML = Math.floor(Math.random() * 50 + 1);
	}
}


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

function leadingZero (i) {
        return (i < 10)? '0'+i : i; /* jesli liczba mniejsza od 10 - wypisz 0 + liczbę, w innym wypadku - wypisz liczbę*/
    }

zegar.innerHTML = leadingZero(dzien) + "/" + leadingZero(miesiac) + "/" + rok;
czas.innerHTML =  leadingZero(godzina) + ':' + leadingZero(minuta) + ':' + leadingZero(sekunda) + '<br>';



window.onload = function ()
{
	function zmienKolor()
{
    this.className = "zmienKolor";
}
function zmienKolor2()
{
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

	var button = document.querySelector('#button1');
	var testowy = document.getElementById("godzina");
    var testowy2 = document.getElementById("zegar");
	var wykrzyknik  = document.getElementById("wykrzyknik");
	var stop  = document.getElementById("stop");


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




	//********** przesuwany obrazek ruchami myszki


	var obrazek = document.getElementById("obrazek");
	function ruchObrazka(e, obr)
{

			obr.style.left = e.clientX - obr.width / 2 + "px";
			obr.style.top = e.clientY - obr.height / 2 + "px";/* e - obiekt, argument funkcji; client X,Y - położenie kursora*/

	}
	obrazek.onmousedown = function ()
	{
		var self = this;
		document.onmousemove = function (e)
		{
		var lokalizacja = document.getElementById("lokalizacja");
	lokalizacja.innerHTML = "Lokalizacja obrazka: " + e.clientX + " x " + e.clientY;
			ruchObrazka(e, self);
		};
	};
		/* teraz obrazek ucieka przy styczności kursora z lwym górnym rogiem, a ja chcę nim poruszać, na środku obrazka, dlatego odejmujemy połwę wartości szerokości obrazka- sprawdzam jaką obrazek ma szerokosć w właściwościach obrazka*/

	obrazek.onmouseup = function () {
		document.onmousemove = null;
	};
	obrazek.ondragstart = function (e) {
		e.preventDefault(); // wytłączenie domyślnego przesuwania, gdy puścimy to sie nie przes
	};



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

	submit.onclick = function (e){

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
		}
		else {
			tmp4.innerHTML = "";
		}
		tmp2.innerHTML = email2.value;
		e.preventDefault();
		/* domyslnie  jak klikniemy wyślij to od razu wysyła i  zamyka formularz, żeby wyłączyć te domyślną akcję - e.preventDefault(); */
	};

	// Stoper
	function stopwatch(uchwytStopera, liczba) {
		uchwytStopera.innerHTML = --liczba;
		setTimeout(function(){
			stopwatch(uchwytStopera, liczba);
		}, 1000);
	};

	var poczatkowaWartosc = document.getElementById("poczatkowaWartosc");
	var poczatkowaValue = poczatkowaWartosc.value;
	var przyciskWlacz = document.getElementById("przyciskWlacz");
	var przyciskZatrzymaj = document.getElementById("przyciskZatrzymaj");
	var uchwytStopera = document.getElementById("uchwytStopera");


	przyciskWlacz.onclick = function(){
var poczatkowaValue = poczatkowaWartosc.value;
		uchwytStopera.innerHTML = poczatkowaValue;
		setTimeout(function(){
			stopwatch(uchwytStopera, poczatkowaValue);
		}, 1000);
	};

	// Licznik
	function stopwatch1(uchwytStopera1, liczbaA) {

			uchwytStopera1.innerHTML = --liczbaA;
		setTimeout(function(){
			stopwatch(uchwytStopera1, liczbaA);
		}, 1000);


	};

	var poczatkowaWartosc1 = document.getElementById("poczatkowaWartosc1");
	var poczatkowaValue1 = poczatkowaWartosc1.value;
	var uchwytStopera1 = document.getElementById("uchwytStopera1");


var poczatkowaValue1 = poczatkowaWartosc1.value;
		uchwytStopera1.innerHTML = poczatkowaValue1;
		setTimeout(function(){
			stopwatch1(uchwytStopera1, poczatkowaValue1);
		}, 1000);
};

