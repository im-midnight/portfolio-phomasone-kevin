// Menu hamburger
const menuHamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".mobile-menu")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('open') // Rajout la classe mobile menu au variable navLinks
})
// Ferme le menu dès qu'on clique sur un lien à l'intérieur
const navLinksMobile = document.querySelectorAll('.mobile-menu a')
navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open')
    })
})