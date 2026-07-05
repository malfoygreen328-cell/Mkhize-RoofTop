//=====================================
// Sticky Header
//=====================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

//=====================================
// Mobile Menu
//=====================================

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click",()=>{

    menuToggle.classList.toggle("active");

    navbar.classList.toggle("active");

});

//=====================================
// Close Menu
//=====================================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuToggle.classList.remove("active");

        navbar.classList.remove("active");

    });

});

//=====================================
// Active Navigation
//=====================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});