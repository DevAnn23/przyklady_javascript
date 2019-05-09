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