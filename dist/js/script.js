const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
const btnBiodata = document.querySelector('#to-biodata')


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

btnBiodata.addEventListener('click', function () {
    btnBiodata.classList.toggle('to-biodata');
});