
// AI Assistant Toggle

const aiBtn =
document.getElementById("aiBtn");


const panel =
document.querySelector(".ai-panel");



aiBtn.addEventListener(
"click",
()=>{


if(panel.style.display==="block")
{

panel.style.display="none";

}

else{

panel.style.display="block";

}


});






// Mouse Card Tilt Effect


const cards =
document.querySelectorAll(".glass-card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let x =
(e.offsetX/card.offsetWidth-.5)*20;


let y =
(e.offsetY/card.offsetHeight-.5)*20;



card.style.transform =
`
rotateX(${-y}deg)
rotateY(${x}deg)
`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform="rotateX(0) rotateY(0)";


});


});





// Hero entrance animation


window.addEventListener(
"load",
()=>{


document.querySelector(".hero-content")
.style.opacity="1";


document.querySelector(".pillar")
.style.transform="scale(1)";


});
