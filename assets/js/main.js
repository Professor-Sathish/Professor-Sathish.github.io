/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        // Sections without a menu entry (e.g. academy) have no link to highlight
        if(!sectionsClass) return

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CONTACT FORM (Google Apps Script) =====*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

if(contactForm){
    contactForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        contactMessage.textContent = 'Sending...'
        fetch(contactForm.action, {method: 'POST', body: new FormData(contactForm), mode: 'no-cors'})
            .then(() =>{
                contactMessage.textContent = 'Thank you! Your message has been sent.'
                contactForm.reset()
            })
            .catch(() =>{
                contactMessage.textContent = 'Could not send. Please email r.sathish@kgkite.ac.in instead.'
            })
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
if(window.ScrollReveal){
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    //     reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400});
    sr.reveal('.home__social-icon',{ interval: 200});
    sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
    sr.reveal('.stats__item, .research__card, .timeline__item, .info__card',{interval: 150, distance: '40px'});
}
