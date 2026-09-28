/* =====================================
   DIGITAL PILLARS
   ANIMATION SCRIPT
===================================== */



/* =====================================
   LENIS SMOOTH SCROLL
===================================== */


const lenis = new Lenis({

    duration:1.2,

    smooth:true

});


function smoothScroll(time){

    lenis.raf(time);

    requestAnimationFrame(smoothScroll);

}


requestAnimationFrame(smoothScroll);







/* =====================================
   GSAP INITIALIZATION
===================================== */


gsap.registerPlugin(
    ScrollTrigger
);








/* =====================================
   HERO INTRO ANIMATION
===================================== */


const heroTimeline = gsap.timeline();



heroTimeline


.from(".navbar",
{

    y:-80,

    opacity:0,

    duration:1,

    ease:"power3.out"

})



.from(".small-title",
{

    opacity:0,

    y:40,

    duration:.7

})



.from("h1",
{

    opacity:0,

    y:80,

    duration:1,

    ease:"power3.out"

},"-=0.3")



.from(".hero-content>p",
{

    opacity:0,

    y:40,

    duration:.8

},"-=0.5")



.from(".hero-buttons",
{

    opacity:0,

    scale:.8,

    duration:.6

})



.from(".core",
{

    opacity:0,

    scale:.5,

    rotateY:90,

    duration:1.5,

    ease:"back.out"

},"-=1")



.from(".dashboard",

{

    opacity:0,

    y:80,

    stagger:.25,

    duration:.8,

    ease:"power3.out"

},"-=1");









/* =====================================
   FLOATING HERO OBJECT
===================================== */


gsap.to(".core",

{

    y:-25,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});







/* =====================================
   DASHBOARD FLOATING
===================================== */


gsap.to(".card-one",

{

    y:-20,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});




gsap.to(".card-two",

{

    y:20,

    duration:4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});




gsap.to(".card-three",

{

    y:-15,

    duration:3.5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});








/* =====================================
   SERVICE SCROLL REVEAL
===================================== */


gsap.utils.toArray(".service-card")

.forEach((card)=>{


gsap.from(card,

{

    scrollTrigger:{


        trigger:card,


        start:"top 85%",


        toggleActions:"play none none reverse"


    },


    opacity:0,


    y:80,


    duration:1,


    ease:"power3.out"


});


});







/* =====================================
   PROJECT ANIMATION
===================================== */


gsap.utils.toArray(".project")

.forEach((item)=>{


gsap.from(item,

{


scrollTrigger:{


trigger:item,


start:"top 85%"


},


opacity:0,


scale:.8,


duration:1


});


});








/* =====================================
   NUMBER COUNTER
===================================== */


const counters =
document.querySelectorAll(".counter");



counters.forEach(counter=>{


const updateCounter=()=>{


const target =
+counteR.dataset.target;


};


});





ScrollTrigger.create({

trigger:".analytics",

start:"top 80%",


once:true,


onEnter:()=>{


counters.forEach(counter=>{


let target =
+counter.dataset.target;


let current =
0;



let interval =
setInterval(()=>{


current++;


counter.innerText =
current;



if(current>=target){

clearInterval(interval);

}


},20);



});


}



});









/* =====================================
   CARD TILT EFFECT
===================================== */


const cards =
document.querySelectorAll(".dashboard");



cards.forEach(card=>{


card.addEventListener(

"mousemove",

(e)=>{


const box =
card.getBoundingClientRect();



const x =
e.clientX-box.left;



const y =
e.clientY-box.top;



const rotateX =
(y-box.height/2)/15;



const rotateY =
(box.width/2-x)/15;



gsap.to(card,

{

rotationX:rotateX,

rotationY:rotateY,

scale:1.05,

duration:.3

});


});


card.addEventListener(

"mouseleave",

()=>{


gsap.to(card,

{

rotationX:0,

rotationY:0,

scale:1,

duration:.5

});


});


});








/* =====================================
   AI ASSISTANT
===================================== */


const aiButton =
document.getElementById("ai-button");


const aiBox =
document.querySelector(".ai-box");



aiButton.addEventListener(

"click",

()=>{


if(aiBox.style.display==="block"){


gsap.to(aiBox,

{

opacity:0,

y:20,

duration:.3,


onComplete:()=>{

aiBox.style.display="none";

}

});


}


else{


aiBox.style.display="block";


gsap.fromTo(aiBox,

{

opacity:0,

y:30

},

{

opacity:1,

y:0,

duration:.5

});


}



}

);









/* =====================================
   MAGNETIC BUTTON EFFECT
===================================== */


const buttons =
document.querySelectorAll("button");



buttons.forEach(button=>{


button.addEventListener(

"mousemove",

(e)=>{


const rect =
button.getBoundingClientRect();



const x =
e.clientX-rect.left-rect.width/2;



const y =
e.clientY-rect.top-rect.height/2;



gsap.to(button,

{

x:x*.15,

y:y*.15,

duration:.3

});


});





button.addEventListener(

"mouseleave",

()=>{


gsap.to(button,

{

x:0,

y:0,

duration:.5

});


});


});








/* =====================================
   REDUCED MOTION SUPPORT
===================================== */


if(

window.matchMedia(

"(prefers-reduced-motion: reduce)"

).matches

){


gsap.globalTimeline.pause();


}