/*==========================================
Mobile Menu
==========================================*/

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

/*==========================================
Close Menu After Clicking Link
==========================================*/

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/*==========================================
Dark / Light Mode
==========================================*/

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.classList.remove("fa-moon");
        themeToggle.classList.add("fa-sun");
    }
    else{
        themeToggle.classList.remove("fa-sun");
        themeToggle.classList.add("fa-moon");
    }

};

/*==========================================
Typing Animation
==========================================*/

const typingElement = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "BCA Student",
    "UI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){
            deleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){
            deleting = false;
            wordIndex = (wordIndex+1)%words.length;
        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/*==========================================
Back To Top Button
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

/*==========================================
Contact Form Validation
==========================================*/

const form=document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const subject=document.getElementById("subject").value.trim();
    const message=document.getElementById("message").value.trim();

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name===""){
        alert("Please enter your name.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Enter a valid email.");
        return;
    }

    if(subject===""){
        alert("Please enter subject.");
        return;
    }

    if(message.length<10){
        alert("Message should contain at least 10 characters.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();

});

/*==========================================
Scroll Reveal Animation
==========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});

/*==========================================
Active Navigation
==========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

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