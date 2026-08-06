/*========================================
MOBILE MENU
========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


/*========================================
STICKY HEADER
========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";
        header.style.background="#ffffff";

    }

    else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.96)";

    }

});


/*========================================
FAQ
========================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const btn=item.querySelector(".faq-question");
    const answer=item.querySelector(".faq-answer");
    const icon=btn.querySelector("i");

    btn.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                other.querySelector(".faq-answer").style.display="none";
                other.querySelector("i").classList.remove("fa-minus");
                other.querySelector("i").classList.add("fa-plus");

            }

        });

        if(answer.style.display==="block"){

            answer.style.display="none";

            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        }

        else{

            answer.style.display="block";

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});


/*========================================
BOOK APPOINTMENT
========================================*/

const form=document.getElementById("appointmentForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const email=document.getElementById("email").value;
const date=document.getElementById("date").value;
const time=document.getElementById("time").value;
const service=document.getElementById("service").value;
const message=document.getElementById("message").value;

const text=`Hello Choudhary Dental Clinic,

I would like to book an appointment.

Name : ${name}

Phone : ${phone}

Email : ${email}

Preferred Date : ${date}

Preferred Time : ${time}

Treatment : ${service}

Message : ${message}`;

window.open(

`https://wa.me/919045048354?text=${encodeURIComponent(text)}`,

"_blank"

);

form.reset();

});

}


/*========================================
SMOOTH ACTIVE NAV
========================================*/

const sections=document.querySelectorAll("section");
const nav=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

nav.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*========================================
SCROLL REVEAL
========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(".service-card,.why-card,.testimonial-card,.trust-box,.doctor,.about,.contact,.appointment").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s ease";

observer.observe(el);

});
