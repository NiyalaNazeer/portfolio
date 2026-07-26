// ===============================
// Professional Typing Animation
// ===============================

const titles = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "LLM Developer",
    "Python Developer"
];

const subtitle = document.querySelector(".hero-left h2");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = titles[titleIndex];

    if (!deleting) {
        subtitle.textContent = current.slice(0, ++charIndex);

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1800); // pause before deleting
            return;
        }

    } else {

        subtitle.textContent = current.slice(0, --charIndex);

        if (charIndex === 0) {
            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,10,25,.96)";

    } else {

        header.style.background = "rgba(10,15,30,.85)";
    }

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#3b82f6";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 300);
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};