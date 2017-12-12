// ------------KURS JAVASCRIPT---------------

// Zmienne

/*
Typy zmiennych:
1) liczby - number:
var number = 20;
2) ciąg znaków - string:
var string = "dwadzieścia";
var string1 = "20";
3) wartości logiczne - boolean(true/false):
var redHead = true;
var blueCar = false;
4) tablice - array;
var cars = ["blue", 20, true, [] ];
5) pustka - null;
6) niezidentyfikowana - undifined;

 NIe trzeba pisać var za każdym razem, odzielamy je przecinkiem:
 var a = 2, b = 3, c = 4;
  var a = 2,
	  b = 3,
	  c = 4;

Zmienne nie mogą zaczynać sie od liczby lub być słowami kluczowymi;
*/
var nazwaZmiennej = 5; // assigned value 5 ( deklacracja zmiennej);
var VAT = 23;
var obliczonyVAT = (1 + VAT * 1 / 100);
var cenaNettoJAVA = 39;
var cenaNettoAJAX = 34;

var cenaBruttoJAVA = cenaNettoJAVA * obliczonyVAT;
var cenaBruttoAJAX = cenaNettoAJAX * obliczonyVAT;
alert("cena brutto AJAX to " + cenaBruttoAJAX + ", a cena brutto JAVA to " + cenaBruttoJAVA);

// PRZYCISK - TO TOP PAGE

window.onload = function () {
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
		var yScrollAxis = window.pageYOffset;
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
	}
};

// OPERATORY
/*
OPERATOR -TO ZNAK SŁUŻĄCY DO OPEROWANIA NA ZMIENNYCH

OPERATORY ARYTMETYCZNE:
  + ADDITION- DODAWANIE LICZB LUB ŁACZENIE STRING'ÓW
  - SUBSTRACTION
  * MULTIPLICATION
  / DIVISION

  % MODULO - reszta z dzielenia

  = PRZYPISANIE WARTOŚCI
  +=
  -+
  /=
  *=
  %=


++ - INKREMENTACJA- zwiększanie wartości o 1
-- - DEKREMENTACJA - zmniejszanie wartosci 0 1

OPERATORY RELACYJNE (porównania)

== porównania
=== porównuje,czy zmienne są IDENTYCZNE(typy zmiennyczh)
= przypisania
!= rózne od siebie
!== - czy nie  są identyczne (typy zmiennyczh)
< mniejsz niż
> większ niż
>= wieksze lub równe
<= mniejsz lub równe

OPERATORY LOGICZNE

! - NEGACJI
1 NEGUJE I ZAMIENIA W 0,
0 NEGUJE I ZAMIENIA W 1,
TRUE ZMIENI W FALSE, FALSE W TRUE;

&& "i" KONIUNKCJA - WSZYSTKIE WARUNKI SPEŁNIONE;
|| "lub" ALTERNATYWA - PRZYNAJMNIEJ JEDEN WARUNEK MUSI BYC PRAWDZIWY
JEST FAŁSZYWA GDY OBA WYRAŻENIA SĄ FAŁSZYWE
*/

var a = 1,
	b = 2;

if (!(a < b && b == 3)) {
	// negacj  zmieniła wynik zanegowała całe wyrażenie
	alert("test udany");
}

/*
INSTRUKCJE WARUNKOWE
 JEŚLI WARUNEK - to zrób coś
 WINNYM PRZYPADAKU ZRÓB COŚ INNEGOB JESZCE COŚ INNEGO


var z = 12,
	v = 7;
if (a < b ){
	alert( "a jest mniejsze niż b");
}
else if ("a > b");{
alert("a jest wieksz niż b");
}
else {
	alert("a jest ani mniejsze, ani wieksze  niż b");
}

// SKRÓCONA INSTRUKCJA WARUNKOWA  IF... ELSE...


var x = 6;
var czyParzysta;
if (x % 2 == 0){
czyParzysta = true;
}
else {
	czyParzysta = false;
}
alert(czyParzysta);


// !! TO SAMO CO POWYŻEJ TYLKO SKRÓCONE DO JEDNEJ LINI - sprawdzamy czy zmienna czyParzysta jest podzielna przez 2, jesli tak zwraca true, jesli nie zwraca false;

var czyParzysta = ( x % 2 === 0) ? true : false;
// za true i false możemy wpisać swój tekst, możemy zrobić jeszcze większy skrót:
alert(( x % 2 === 0) ? "ta liczba jest parzysta" : "ta liczba jest nieparzysta";

FUNCTIONS  - FUNKCJE - kawałek kodu, który moze być wykjorzystany w wielu miejscach bez potrzeby ponownego pisania treści, funkcje wywołują coś.

np funkcja alert(); jest to juz istniejaca funkcja w javascript, funkcje też możemy sami napisać.


function test(){
// w klamerkach piszemy tzw. ciało funkcji, może byc funkcja w funkcji
	alert("cosik");
}
FUNKCJE JAKO WARTOŚC ZMIENNEJ / ANONIMOWE FUNKCJE

var y = function(){
alert("kkk");
}
y(); - wywołanie funkcji
*/
/*s
function dodaj(x, y){
// w klamerkach piszemy tzw. ciało funkcji, może byc funkcja w funkcji
	return x + y;
}
function dzielenie(x, y){
	if ( y === 0){
		alert("Nie dzielimy przez 0");
		//return; ---- gdy to zapiszę, nie muszę dawać else, bo to oznacza, że zwróci ten blok i wyjdzie z funkcji, nie będzie sie dalej wywoływać.
	}
	else {
		return x / y;
	}
}
var sumaZmiennych = dodaj(2, 7);
alert(sumaZmiennych);
var dzielenieZmiennych = dzielenie(10, 0);
aler(dzielenieZmiennych);}
 //Funkcje anonimowe - bez nazwy, warość zmiennej w nawiasie może być funkcją;

function test(f)
{
	f();
}
test(
function(){
	alert("Funkcja anonimowa w funkcji test");
})

OBIEKTY - TO POJEMNIKI DO PRZECHOWYWANIA ZMIENNYCH I FUNKCJI TEMATYCZNIE ZE SOBĄ ZWIAZANYCH

NP. document - to obiekt stworzony przez dev javascript

var div= document.getElementById("test");
div.innerHTML = "nowa treśc";

WŁASNE OBIEKTY TWORZYMY W NASTĘPUJĄCY SPOSÓB:

var osoba = {
imie: "Arek",
nazwisko: "Kowalski"
};

alert(osoba.imie);
lub
div.innerHTML = osoba.imie;

*** Słówko kluczowe THIS

var osoba = {
imie: "Arek",
nazwisko: "Kowalski",
pobierzInformacje: function(){                  ***** funkcja jest częścia obiektu
return this.imie + " " + this.nazwisko;
}
};

div.innerHTML = osoba.pobierzInformacje();

GDY div.innerHTML = osoba; ZWRACA - TYLKO TO, ŻE JEST TO OBJECT

GDY CHCEMY ŻEBY ZWRÓCIŁO NAM NASZ OBIEKT JAKO CIĄG ZNAKÓW, MOŻNA UŻYĆ METODY toString:


var osoba = {
imie: "Arek",
nazwisko: "Kowalski",
pobierzInformacje: function()
{
return this.imie + " " + this.nazwisko;
},
toString: finction() {
return this.imie + " " + this.nazwisko;
}
};
GDY div.innerHTML = osoba; TERAZ ZWRACA TO CO JEST W CIELE FUNKCJI METODY toString;

	// *** przykład na obiektach

	//MOZEMY ROBI TZW. KLASY, ŻEBY TWORZYĆ FORMY DO WYTWARZANIA NOWYCH PODPBNYCH DO SIEBIE OBIEKTÓW, RÓZNIACYMI SIĘ POSZCZEGÓLNAMI WARTOSCIAMI.
var div= document.getElementById("testowy");
function osoba(imie, nazwisko)
{
	this.name = imie;
	this.surname = nazwisko;
	this.toString = function()
	{
	return this.name + " " + this.surname;
	};
}
//***** teraz możemy stworzyć wiele osób
	 var div= document.getElementById("testowy");
	var x = new osoba("Jan", "Kowalski");
	var z = new osoba("Janko", "Kowal");
	var a = new osoba("Janina", "Kowalska");
	var d = new osoba("Janusz", "Kowalek");
	div.innerHTML = x + "<br>" + a + "<br>" + z + "<br>" + d + "<br>";

****** ARRAYS - tablice ----- tablica jets też obiektem

var produkty = ["PHP,JAVA,MYSQL];
alert(produkty[0]);
.push - wypychamy coś na koniec tablicy

Tablica Asocjacyjna
var osoba = [];
osoba["imie"] = "Arek";
alert(osoba["imie"]);

***** DOM - document object model



setTimeout - która wykonuje operację po okreslonym czasie
setInterval - wykonuje operację co interwał (co określony przez nas czas, w nieskończoność)

clearTimeout - powstrzymuje operację, która ma zostać wykonana
clearInterval - j.w  tylko interwał


*/
// Licznik
function stopwatch1(uchwytStopera1, liczbaA) {

	uchwytStopera1.innerHTML = --liczbaA;
	setTimeout(function () {
		stopwatch(uchwytStopera1, liczbaA);
	}, 1000);


};

var poczatkowaWartosc1 = document.getElementById("poczatkowaWartosc1");
var poczatkowaValue1 = poczatkowaWartosc1.value;
var uchwytStopera1 = document.getElementById("uchwytStopera1");


var poczatkowaValue1 = poczatkowaWartosc1.value;
uchwytStopera1.innerHTML = poczatkowaValue1;
setTimeout(function () {
	stopwatch1(uchwytStopera1, poczatkowaValue1);
}, 1000);
// TOTOLOTEK
function totolotek(liczba, wylosowanaLiczba) {
	/* Math.floor zaokragla w dół, dlatego dodaje się 1*/
	var liczba = document.getElementsByClassName('liczba');

	for (var i = 0; i < liczba.length; i++) {
		var wylosowanaLiczba = Math.floor(Math.random() * 10 + 1);
		liczba[i].innerHTML = wylosowanaLiczba;
	}

}
// Rozwiązanie z setInterval

var odniesienieDoInterwal;
	var poczatkowaWartosc = document.getElementById("poczatkowaWartosc");
	var przyciskWlacz = document.getElementById("przyciskWlacz");
	var przyciskZatrzymaj = document.getElementById("przyciskZatrzymaj");
	var uchwytStopera = document.getElementById("uchwytStopera");

	var odniesienieDoInterwal;

	//funkcja stopwatchInterval - silnik stopera
	function stopwatchInterval(uchwytStopera, liczba) {

		var odniesienieDoInterwal = setInterval(function(){
			if( liczba-- <= 0 ) {
				clearInterval(odniesienieDoInterwal);
				return;
			}
			uchwytStopera.innerHTML = liczba;
		},1000);
		return odniesienieDoInterwal;
	}

	// wywołanie funkcji po nacisnieciu na przycisk
	przyciskWlacz.onclick = function () {
		var poczatkowaValue = poczatkowaWartosc.value;
		uchwytStopera.innerHTML = poczatkowaValue;

		if(odniesienieDoInterwal)
			clearInterval(odniesienieDoInterwal);
		odniesienieDoInterwal = stopwatchInterval(uchwytStopera, poczatkowaValue);
	};
przyciskZatrzymaj.onclick = function(){
	clearInterval(odniesienieDoInterwal);

}
