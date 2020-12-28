

//RESPONSIVE NAVIGATOR
const navSlide = () => {
     const burger = document.querySelector(".burger");
     const nav = document.querySelector(".nav-links");
     const navLinks = document.querySelectorAll(".nav-links li");

     burger.addEventListener("click", () => {
          //toggle nav
          nav.classList.toggle("nav-active");

          //animate links
          navLinks.forEach((link, index) => {
               if (link.style.animation) {
                    link.style.animation = ``;
               } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
               }
          })

          //burger animation
          burger.classList.toggle("toggle");
     })

     
}

navSlide();


//HOME TITLE CHANGING WORDS

const changingWords = ()=>{
     const texts=["Web Designer","Student","Ordinary Person"];
     let count = 0;
     let index = 0;
     let currenText = "";
     let letter = "";
     (function type(){
          if(count===texts.length){
               count = 0;
          }
          currenText=texts[count];
          letter=currenText.slice(0,++index);

          document.querySelector(".typing").textContent=letter;
          if(letter.length===currenText.length){
               count++;
               index=0;
          }
          setTimeout(type,250);
     })();
}

changingWords();



//BACK-TO-TOP BUTTON ANIMATION
window.addEventListener("scroll", () => {
     var scroll = document.querySelector(".backtotop");
     scroll.classList.toggle("active", window.scrollY > 500);
})

function showAlert(message, className){
     var alert = `
     <div class="alert alert-${className}">   
         ${message}
     </div>
 `;

     const title = document.querySelector("#contact__title");
     //beforeBegin, afterBegin, beforeEnd, afterEnd
     title.insertAdjacentHTML("beforeBegin", alert);
     
     setTimeout(() => {
          document.querySelector(".alert").remove();
     }, 3000);
}


const inputName = document.getElementById("exampleFormControlInput1");
const inputEmail = document.getElementById("exampleFormControlInput2");
const inputSubject = document.getElementById("exampleFormControlInput3");
const textareaMessage = document.getElementById("exampleFormControlTextarea1");
const button = document.querySelector(".btn");
//EmailControl
button.addEventListener("click", () => {
     if (inputName.value == "" || inputEmail.value == "" || inputSubject.value == "" || textareaMessage.value == "") {
          showAlert("heyeheyehy", "success");
     }
})



//Send Email

function emailSend() {
     Email.send({
          
          SecureToken: "ec5a15b5-59e2-442f-8627-0e100f34149b",
          To: 'furkanlebit7@hotmail.com',
          From: "jsfurkanjs@gmail.com",
          Subject: inputSubject.value,
          Body: [inputName.value,
          inputEmail.value,
          textareaMessage.value]
     }).then(
          message => alert(message)
     );
}
emailSend();


//Scrool Reveals 
const sr = ScrollReveal({
     origin: 'top',
     distance: '80px',
     duration: 2000,
     reset: true
 });
//Scroll Home
 sr.reveal('.home-data',{}); 
 sr.reveal('.home-image',{delay: 200}); 
 sr.reveal('.home-social',{delay: 400});

//Scroll About
sr.reveal('#about-title',{}); 
sr.reveal('.about-image',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

//Scroll Skills
sr.reveal('#skills-title',{}); 
sr.reveal('.skills-links',{}); 
sr.reveal('.skill-card',{interval: 200}); 
sr.reveal('.skills-image',{delay: 600});

//Scroll Services
sr.reveal('#services-title',{}); 
sr.reveal('.services-content',{delay: 400}); 
sr.reveal('.card',{interval: 400}); 

//Scroll Contact
sr.reveal('#contact-title',{}); 
sr.reveal('.form-group',{interval: 200}); 
sr.reveal('.btn',{delay: 1000}); 

//Scroll Footer
sr.reveal('.footer-name',{}); 
sr.reveal('.footer-social-link',{interval: 200}); 
sr.reveal('.footer-cop',{delay: 800}); 