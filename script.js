// Google map


function initialize() {
	var mapProp = {
		center: new google.maps.LatLng(53.092694, 21.547027),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	google.maps.event.addDomListener(window, initialize);

}
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

	document.querySelector('#button1').innerHTML = "Rzut ";
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
		liczba[i].style.display = "inline";
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

document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok;
document.getElementById("godzina").innerHTML = godzina + ":" + minuta + ":" + sekunda;


//********** przesuwany obrazek ruchami myszki

	function ruchObrazka(e, obr)
{
			obr.style.left = e.clientX - obr.width / 2 + "px";
			obr.style.top = e.clientY - obr.height / 2 + "px";/* e - obiekt, argument funkcji; client X,Y - położenie kursora*/

	}
window.onload = function ()
{
	var obrazek = document.getElementById("obrazek");
	obrazek.onmousedown = function ()
	{
		var self = this;
		document.onmousemove = function (e)
		{
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
	var przycisDown = document.getElementById("przyciskDown");

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
		//pierwsza liczba w poziomie(x), druga w pionie(y)
		window.scrollBy(0, 100); /* wartości dodatnie dół*/
	};
};
