
let ol = document.querySelector('ol');
let olItems = document.querySelectorAll('li');
const removeTask = (event) => {

    const index = event.target.dataset.key;
    console.log(index);
    // event.target.parentNode.remove();
    document.querySelector(`li[data-key="${index}"]`).remove();
    // dataset - odnosimy się do atrybutu
    ol = document.querySelector('ol');
    console.log(ol);
    olItems = document.querySelectorAll('li');

}

document.querySelectorAll('.button--remove').forEach(item => item.addEventListener('click', removeTask))

const strikethroughtTask = (event) => {
    const index = event.target.dataset.key;
    console.log(index);
    // event.target.parentNode.remove();
    document.querySelector(`li[data-key="${index}"]`).style.textDecoration = "line-through";
}

let buttonSstrikethrought = document.querySelectorAll('.button--strikethrought');
let buttonSstrikethroughtTab = [...buttonSstrikethrought];
buttonSstrikethrought.forEach(item => item.addEventListener('click', strikethroughtTask))

// 
// filetr - wyszukiwarka 
// 

const arr = [12, 22, 31, 3, 17, 109];
// tylko nieparzyste
// FILTER
// biore tablicę i numer oznacza elementy tej tablicy, czyli szukamy po number tablicy arr i dopasowuję nuber pdzielne przez 2 
const addNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));
const numbersBiggerThen100 = arr.filter(number => (number > 100));

// MAP
// metoda map zwrac również tablice i wykonuje działanie na tym elemencie
//  czyli filter tylko wyszukuje danych elementów, np większych niż 100 a map bierze elementy tablicy i wykonuje na nich działanie 

const double = arr.map(number => number * 2);
const people = arr.map(number => number + ' polubień');

// forEach

// aby coś zrobić w inny sposób na elementach tablicy, musimy wziąć tablice i w metodzie forEach dać drugi argument, który będzie oznaczał indez elementów tablicy
arr.forEach((number, index) => arr[index] = number * 2);

// lepszym sposobem jest MAP

const input = document.querySelector('.input-search');
// muszę tu użyć querySelektor zeby potem appendChild



const searchTask = (e) => {
    console.log(ol);
    const seachText = e.target.value.toLowerCase();
    let tasks = [...olItems];
    // filtruję li icj kontent zamieniam na male litery i czy zawiera
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(seachText))
    console.log(tasks);
    ol.textContent = "";
    //  wyczyściłam listę i wkładam do niej taski które we wcześniejszym kroku są filtrowane
    tasks.forEach(li => ol.appendChild(li));
}
// Parametr reszta składnia pozwala nam reprezentować nieokreśloną liczbę argumentów jako tablica.
//  Za POMOCĄ rest ... zamieniłam listę wezłów - li na prawdziwą tablice elementów li

input.addEventListener('input', searchTask);

// dodawanie nowego zadania 

const form = document.querySelector('form');
const formInput = document.querySelector('form input');

const counterTasks = document.getElementsByClassName('.counter-tasks');
const listItemsNew = document.querySelectorAll('li.tasks__item');
let indexCounter = olItems.length;
const addTask = (e) => {
    e.preventDefault();
    indexCounter++;
    const titleTask = formInput.value;
    const newTask = document.createElement("li");
    newTask.className = 'tasks__item';
    newTask.innerHTML = titleTask + `<button data-key="${indexCounter}"
    class="button--remove">Remove</button> <button class="button--strikethrought"
    data-key="${indexCounter}">Strikethrought</button>`;
    newTask.dataset.key = indexCounter;
    let newTaskButton1 = newTask.children;
    ol.appendChild(newTask);
    buttonSstrikethroughtTab.push(newTaskButton1[1]);
    console.log(buttonSstrikethroughtTab);
}

form.addEventListener('submit', addTask);