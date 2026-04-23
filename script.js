// Get main elements from the page (button, text and title)
const btnShowContent = document.getElementById('btn');
const textHidden = document.querySelector('.hidden');
const titleWhoAmI = document.querySelector('.title-whoAmI')


// Show welcome message when page loads
document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('welcome');
    message.classList.remove('hidden');
});


// Hide welcome message after 2 seconds
setTimeout(() => {
    welcome.classList.add('hidden');
}, 2000);


// Check button in console (for test)
console.log(btnShowContent)


// Change text and title when button is clicked
btnShowContent.addEventListener('click', () =>{

    if(btnShowContent.textContent === 'Mostrar') {
        textHidden.classList.remove('hidden');
        btnShowContent.textContent = 'Ocultar';
        titleWhoAmI.textContent = 'Este soy yo';

    } else if(btnShowContent.textContent === 'Ocultar') {
        textHidden.classList.add('hidden');
        btnShowContent.textContent = 'Mostrar';
        titleWhoAmI.textContent = '¿Quién soy?';
    }
})