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

var a = 1, b = 2;

if (!(a < b && b == 3)){
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
*/
