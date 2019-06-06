
const menu = {};

menu.item = "Anna";
menu['href'] = "1#"
menu.open = function() {
    // console.log(this.href);
}

menu.open();
const dog = {
    name: "Imię",
    age: 2,
    barking: function() {
        // console.log("hau hau");
    }
}
dog.barking();

// ES6

const cat = {
    name: "Imię",
    age: 2,
    barking() {
      
    }
}
cat.barking();
cat.newItem = 1;

function plus() {
    cat.newItem++;
}
plus();


document.body.addEventListener('mousemove', function(e) {
    const cursorY = e.clientY + 1;
    const cursorX = e.clientX + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const userName = document.querySelector("h3.cursor-position");
    userName.textContent = cursorX + ", " + cursorY;
    const red = Math.floor(cursorY / width * 100);
    const green = Math.floor(cursorX / width * 100);
    
    const blue = Math.floor((cursorX / width * 100 + cursorY / width * 100) / 2);
    
    const bg = `rgb(${red}%, ${green}%, ${blue}%)`;    
    const modulo = red % 2;
    if(modulo === 0 ) {
        userName.style.color = bg;
    }
    else {
        userName.style.color = "black";
    }
 
  
})


// ///////////////
// PRoject 2
// ////////////////

const input = document.getElementById('pass');
const messageDiv = document.querySelector('.message');

const passwords = ["useR", "Wiosna"];
const messages = ["To jest ukryta treść", "Piękna pora roku"];

// METODA 1
// input.addEventListener('input', (e) => {
//     messageDiv.textContent = "";
//     const text = e.target.value;
//     passwords.forEach((password, index) => {
//         if(password.toLowerCase() === text.toLowerCase()) {
//             messageDiv.textContent = messages[index]; 
//             e.target.value = "";
//         }
//     })
// })

// METODA 2
// musimy stworzyć nową zmiennąm, 
// const passwordsArr = passwords.map(password => password.toLowerCase())
// const showMessage = (e) => {
//     const text = e.target.value;
//     passwordsArr.forEach((password, index) => {
//                 if(password.toLowerCase() === text.toLowerCase()) {
//                     messageDiv.textContent = messages[index]; 
//                     e.target.value = "";
//                 }
//             })

// }

// METODA 3 
// pętla

const passwordsArr = passwords.map(password => password.toLowerCase())
const showMessage = (e) => {
    messageDiv.textContent = "";
    const text = e.target.value.toLowerCase();
    for(let i = 0; i< passwordsArr.length; i++) {
        if (passwordsArr[i] === text) {
            messageDiv.textContent = messages[i];
        }
    }

}


input.addEventListener("input", showMessage);
input.addEventListener('blur', (e) => {
    e.target.classList.remove("focus");
});
input.addEventListener('focus', (e) => {
    e.target.classList.add("focus");
});

// console.log(e.target.value);
// if(password === e.target.value) {
//     messageDiv.textContent = message;
//     e.target.value = "";
// }
// else {
//     messageDiv.textContent = "";
// }