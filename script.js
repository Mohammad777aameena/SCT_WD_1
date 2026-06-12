const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

function revealSections(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {

const windowHeight = window.innerHeight;
const revealTop = section.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
section.classList.add("active");
}

});

}

window.addEventListener("scroll", revealSections);
revealSections();

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navItems.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});