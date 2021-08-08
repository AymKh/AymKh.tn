const cardDisplay = document.querySelector('#grid-container')
const links = document.querySelector('#socials')
const btn = document.querySelector('#contactButton')

// contact links bounce
btn.addEventListener('click', ()=>{
    links.classList.add("animate__bounce", "animate__animated")
    setTimeout(() => {
        links.classList.remove("animate__bounce", "animate__animated")        
    }, 1000);
    
})
