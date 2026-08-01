const bookingForm = document.getElementById("bookingForm");
const salonWhatsApp = "2348012345678";

//================ NAVBAR =================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 80){

    header.classList.add("scrolled");

  }

  else{

    header.classList.remove("scrolled");

  }

});

//================ BOOKING MODAL =================

const modal = document.getElementById("bookingModal");

const modalTitle = document.getElementById("modalTitle");

const serviceSelect = document.getElementById("serviceSelect");

const closeModal = document.querySelector(".close-modal");

bookingForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name = document.getElementById("customerName").value;

  const phone = document.getElementById("customerPhone").value;

  const service = document.getElementById("serviceSelect").value;

  const date = document.getElementById("appointmentDate").value;

  const message =

  `Hello Luxury Hair Studio 👋

  I'd like to book an appointment.

  Name: ${name}

  Phone: ${phone}

  Service: ${service}

  Preferred Date: ${date}

  Thank you 😊`;

  const whatsappURL = `https://wa.me/${salonWhatsApp}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL,"_blank");

});

document.getElementById("navBookBtn").addEventListener("click",(e)=>{

  e.preventDefault();

  openBooking();

});

document.getElementById("heroBookBtn").addEventListener("click",(e)=>{

  e.preventDefault();

  openBooking();

});

closeModal.addEventListener("click",()=>{

  modal.classList.remove("active");

});

window.addEventListener("click",(e)=>{

  if(e.target===modal){

    modal.classList.remove("active");

  }

});

function openBooking(service) {

  modal.classList.add("active");

  if (service) {

    serviceSelect.value = service;

    modalTitle.textContent = `Book ${service}`;

  } else {

    modalTitle.textContent = "Book Appointment";

    serviceSelect.value = "";

  }

}

//================ BOOK BUTTONS ================

const serviceButtons =
document.querySelectorAll(".book-service");

const galleryButtons =
document.querySelectorAll(".gallery-book-btn");

serviceButtons.forEach(button=>{

  button.addEventListener("click",(e)=>{

    e.preventDefault();

    openBooking(button.dataset.service);

  });

});

galleryButtons.forEach(button=>{

  button.addEventListener("click",()=>{

    openBooking(button.dataset.service);

  });

});

//================ TESTIMONIAL SLIDER ================

const dots = document.querySelectorAll(".dot");

const testimonials = document.querySelectorAll(".testimonial-card");

let currentTestimonial = 0;

function showTestimonial(index){

  testimonials.forEach(card=>{

    card.classList.remove("active");

  });

  dots.forEach(dot=>{

    dot.classList.remove("active-dot");

  });

  testimonials[index].classList.add("active");

  dots[index].classList.add("active-dot");

}

dots.forEach((dot,index)=>{

  dot.addEventListener("click",()=>{

    currentTestimonial = index;

    showTestimonial(currentTestimonial);

  });

});

setInterval(()=>{

currentTestimonial++;

if(currentTestimonial >= testimonials.length){

  currentTestimonial = 0;

}

showTestimonial(currentTestimonial);

},5000);

document.getElementById("ctaBookBtn").addEventListener("click",()=>{

  openBooking();

});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 500){

    scrollTopBtn.classList.add("show");

  }else{

    scrollTopBtn.classList.remove("show");

  }

});

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

  reveals.forEach(section =>{

    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();

const revealCards = document.querySelectorAll(".reveal-card");

function revealCardAnimation(){

  revealCards.forEach((card,index)=>{

  const windowHeight = window.innerHeight;

  const cardTop = card.getBoundingClientRect().top;

  const revealPoint = 100;

  if(cardTop < windowHeight - revealPoint){

    setTimeout(()=>{

      card.classList.add("active");

    }, index * 150);

  }

  });

}

window.addEventListener("scroll", revealCardAnimation);

revealCardAnimation();

const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});