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