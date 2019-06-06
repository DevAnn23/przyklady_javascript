/////////////////////////////////////////////////////////////////////////////
// Licznik dodawanie - mogęto wykorzystać przy dodaj do koszyka 
// const add = (start = 0) => {
//     let number = start;
//     let counterValue = document.getElementById('counterValue');

//     return () => {
//         number++;
//         counterValue.value= number;
//     }
// }
// const counter = add();
// const counterFrom5 = add(5);


// document.addEventListener('click', counter);

///////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////
// Sprawdzanie wieku czy użytkownik może mić alkohol

// const user = (name="", age) => {
//     let userName = name;
//     let userAge = age; 
//     function showName() {
//         console.log(`Cześć  ${userName}, ${userAge >= 18 ? 'możesz kupić piwo ' : 'nie możesz kupić piwa '}`);
//     }
//     return showName;
// } 
// // user("ada", 23);
// const mieszko = user("mieszko", 12);
// const jola = user("jola", 12);
// const noName = user();


// noName ();

///////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////

//  LIcznik odwiedzin na strionie 

// const clock = () => {
//     let seconds = 0;
//     document.body.textContent = 0 + " sekund";

//     const timer = () => {
//         seconds++;
//         document.body.textContent = seconds + " sekund";
//     }
//     return timer
// }
// const start = clock();
// // start();
// setInterval(start, 1000);


// let stateCheck = setInterval(() => {
//     if (document.readyState === 'complete') {
//       clearInterval(stateCheck);
//       // document ready
//       let chackIndexOf = "index of sprawdza czy w wyrażeniu znajduje się dany ciąg znaków i zwraca liczbę w którym miejscu się znajduje, jeśli nie madanego znaku zwraca -1 ";
//       let score = 23.2324;
//       console.log('cl');
//       if (chackIndexOf.indexOf("wyrażenq7") === -1) {
//         console.log('false');
//       } else {
//         console.log('true');
//       }
//       const today = new Date();
//       const allDate = new Date();
//       let dayOfWeek = allDate.getDay();

//       // Funkcja drukująca dzień tygodnia 
//       let checkDay = function () {

//         // pobrałam dzień tygodnia za pomocą getDay, funkcja ta jednak nie wyświetla nazwy dnia tygodnia ale zwraca number, który to dzień. Teraz dla przykładu zrobię switch ale w tym przypadku lepszym wjsciem jest stworzenie tablicy.

//         // SWITCH
//         console.log(dayOfWeek);
//         switch (dayOfWeek) {
//           case 1:
//             console.log('Dziś jest poniedziałek');
//             break;
//           case 2:
//             console.log('Dziś jest wtorek');
//             break;
//           default:
//             console.log('Dzis mamy piękny dzień');
//             break;
//         }
//         // możemy za pomocą switcha każdy przypadek po kolei opisać, lub za pomocą tablicy troszkę szybciej.

//         let days = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];

//         console.log("Dziś jest " + days[dayOfWeek]);
//       };

//       checkDay();

//       // a ? b : c; 
//       //  a - warunek (warunek który sprawdzamy )
//       // b - true (jesli true wukonaj b)
//       // c - false (jeśli false wukonaj c)
//       let wynik1 = true;
//       let wynik2 = false;
//       let wynik = (!1 + 3 == 4) ? wynik1 : wynik2;

//       // Mogę sobie wsadzić czysty javascript w stringa bez konktanacji - całość pomiędzy `string ${javascript}`;

//       console.log(`Mój wynik to ${(!1 + 3 == 4) ? wynik1 : wynik2}`);
//     }
//   }, 100);

const Dog = function() {} //konstruktor
const jamnik = new Dog() // obiekt