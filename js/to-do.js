let ol = document.querySelector('ol');
let olItems = document.querySelectorAll('li');
let tasks = [...olItems];
const removeTask = (event) => {
    indexCounter--;
    const index = event.target.dataset.key;
   
    // event.target.parentNode.remove();

    // const removeLi = document.querySelector(`li[data-key="${index}"]`);
     document.querySelector(`li[data-key="${index}"]`).remove();
     const liRemoveFromTask =  tasks.findIndex(removeLi => removeLi.dataset.key = 123);
     console.log(liRemoveFromTask);
    // dataset - odnosimy się do atrybutu
 
    console.log(ol);
    counterTasks.innerHTML = indexCounter;
    console.log('to nasze taski' + tasks);
}
let buttonsSearch = document.querySelectorAll('.button--remove');
let buttonsSearchTab = [...buttonsSearch];
buttonsSearchTab.forEach(item => item.addEventListener('click', removeTask))

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

    // filtruję li icj kontent zamieniam na male litery i czy zawiera

    console.log(tasks);
    counterTasks.innerHTML = tasks.length;

    //  wyczyściłam listę i wkładam do niej taski które we wcześniejszym kroku są filtrowane

    if (!(e.target.value === "")) {
       
        tasks = tasks.filter(li => li.textContent.toLowerCase().includes(seachText))
        // najpierw wprowadzamy filter aby z całej listy mogło dpopasować z szukaną frazą 
        //  następnie czyścimy tablicę 
        ol.textContent = "";
        //  a nasztępnie do tej tablicy wkłądamy tylko to co zawiera szukaną frazę 
        tasks.forEach(li => ol.appendChild(li));
    } else {
        olItems.forEach(itemsli => ol.appendChild(itemsli));
        counterTasks.innerHTML = indexCounter;
    }
}

// Parametr reszta składnia pozwala nam reprezentować nieokreśloną liczbę argumentów jako tablica.
//  Za POMOCĄ rest ... zamieniłam listę wezłów - li na prawdziwą tablice elementów li

input.addEventListener('input', searchTask);

// dodawanie nowego zadania 

const form = document.querySelector('form');
const formInput = document.querySelector('form input');

let counterTasks = document.querySelector('span.counter-tasks');
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
    tasks.push(newTask);
    ol.appendChild(newTask);
    buttonsSearchTab.push(newTaskButton1[0]);
    console.log(buttonSstrikethroughtTab);
    counterTasks.innerHTML = indexCounter;
}
counterTasks.innerHTML = indexCounter;
form.addEventListener('submit', addTask);