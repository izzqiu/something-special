const scenes = document.querySelectorAll(".scene");

function showScene(id){

    scenes.forEach(scene=>{
        scene.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}

// Scene 1
document.getElementById("startBtn").addEventListener("click",()=>{


    const music=document.getElementById("music");

    music.play();


    showScene("scene2");

    typeMessage();


});


// Typewriter
function typeMessage(){

    const text="Hello Vivi Sayang ❤️\n\nSaya Naqiu Parker.\n\nSaya dah lawan Green Goblin...\nSaya dah lawan Venom...\n\nTapi ada satu misi yang saya tak mampu buat sorang.\n\nSaya perlukan awak. 🕷️";

    const typing=document.getElementById("typing");

    typing.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        typing.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            document.getElementById("next1").style.display="inline-block";

        }

    },35);

}

// Scene2 -> Scene3
document.getElementById("next1").addEventListener("click",()=>{

    showScene("scene3");

});


// Scene3 -> Scene4
document.getElementById("yes1").addEventListener("click",()=>{

    showScene("scene4");

});


// Scene4 -> Scene5
document.getElementById("next2").addEventListener("click",()=>{

    showScene("scene5");

});

// FINAL QUESTION

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");


// Button TAKNAK lari

noBtn.addEventListener("mouseover",()=>{

    const x = Math.random() * 400 - 200;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = 
    `translate(${x}px, ${y}px)`;

});


// Kalau tekan JOM

yesBtn.addEventListener("click",()=>{

    showScene("scene6");


    confetti({

        particleCount:200,
        spread:120,
        origin:{
            y:0.6
        }

    });

});

// LOADING SCREEN

window.addEventListener("load",()=>{


    setTimeout(()=>{


        document.getElementById("loader").style.display="none";


    },3500);


});

document.getElementById("whatsappBtn").addEventListener("click",()=>{

    window.open(
    "https://wa.me/601111179060?text=Jom%20tengok%20Spider-Man%20❤️"
    );

});

// WEB CURSOR EFFECT

document.addEventListener("mousemove",(e)=>{

    const web = document.createElement("div");

    web.className="cursorWeb";

    web.style.left=e.pageX+"px";
    web.style.top=e.pageY+"px";

    document.body.appendChild(web);


    setTimeout(()=>{

        web.remove();

    },800);

});

// FLOATING HEARTS

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="heart";


    heart.style.left=
    Math.random()*100+"vw";


    heart.style.animationDuration=
    (3+Math.random()*3)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },6000);

}


setInterval(createHeart,800);