const slideList = [{
        img: "../img/img-1.jpg",
        text: "Pierwszy tekst "
    },
    {
        img: "../img/img-2.jpg",
        text: "Drugi tekst "
    },
    {
        img: "../img/img-3.jpg",
        text: "Trzeci tekst "
    }
]
const image = document.querySelectorAll('img.slider');
const slideText = document.querySelector('h4.slide-text');
const dots = document.querySelectorAll('.dots span');
const imageTab =[...image];
const dotsTab = [...dots];
// Interfejs 
const time = 5000;
let active = 0;
let slide = true;
let opacity = false;

changeDots = () => {
  
    // znajdujemy index elementu dot, która ma klasę active, zwraca inedex jeżli nie ma takiego elementu zrwaca -1
    const activeDot = dotsTab.findIndex(dot => dot.classList.contains('active'))
    // na starcie karuzeli zabieramy elementow pierwszemu active
    dotsTab[activeDot].classList.remove('active');
    // dajemy active elementowi po naszym licznik active, który zwraca number aktywngo slaju 
    dotsTab[active].classList.add('active');
    console.log(dotsTab);
}
carouselSlide  = () => {
    const activeSlide = imageTab.findIndex(img => img.classList.contains('active'))
    const activeSlidePrev = imageTab.findIndex(img => img.classList.contains('prev'))
    let prevIndex = active + 1;
 
    imageTab[activeSlide].classList.remove('active');
    imageTab[activeSlidePrev].classList.remove('prev');
    // const prevImageTab  = imageTab[active -1 ].classList.add('prev');
    // console.log(prevImageTab + "to");
    if (active === 2) {
        prevIndex = 0;
    }
    imageTab[prevIndex].classList.add('prev');
    imageTab[active].classList.add('active');
 
   
    console.log("aktywny slide to " + activeSlide);
    // image.style.left = 50 + "%";
}
const changeSlide = () => {

    active++;
   
    if (active === slideList.length) {
        active = 0;
    }
    
    slideText.textContent = slideList[active].text;
    if (slide) {
        carouselSlide();
    }
    if (opacity) {
        let imageShow = document.querySelector('img.slider.active');
        imageShow.src = slideList[active].img;
    }
    changeDots();
   
}

let indevInterval =  setInterval(changeSlide, time)

const enterKeyPrev = (e) => {
  
    if (e.keyCode == 39 || e.keyCode == 37) {
        clearInterval(indevInterval);
        e.keyCode == 37 ? active++ : console.log(active);

        if (active === slideList.length) {
            active = 0;
        }
        if (active < 0) {
            active = slideList.length -1;
        }
        changeSlide();
        changeDots();
       indevInterval = setInterval(changeSlide, time);
    }
         
}


// setInterval(changeDots, time)
window.addEventListener('keydown', enterKeyPrev);
// Implementacja