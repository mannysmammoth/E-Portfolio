/*

BACKGROUND MOTION

*/

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInterger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInterger}px, ${y * boolInterger}px)`
    }
}

/* 

CONTRAST TOGGLE

*/

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

/* 

MODAL

*/ 

// template_andgvab
// service_0kty3lq
// YhlLe5d3U3EvkB9aG

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success') 
    loading.classList += " modal__overlay--visible"

    emailjs.sendForm(
        'service_0kty3lq',
        'template_andgvab',
        event.target,
        'YhlLe5d3U3EvkB9aG'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked');
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me directly on email@example.com");
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    //toggle modal
    isModalOpen = true;
    document.body.classList += " modal--open";
}