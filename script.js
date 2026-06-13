// ================= AMIT OS LOADER =================

window.addEventListener("load",()=>{

    let loader = document.getElementById("loader");
    let loadText = document.getElementById("loadText");


    let steps = [

        "Loading Skills...",
        "Connecting GitHub...",
        "Starting AI Assistant...",
        "Welcome To Amit Universe 🚀"

    ];


    let i=0;


    let timer=setInterval(()=>{


        loadText.innerHTML=steps[i];


        i++;


        if(i===steps.length){


            clearInterval(timer);


            setTimeout(()=>{


                loader.style.opacity="0";

                loader.style.transition=".8s";


                setTimeout(()=>{

                    loader.style.display="none";

                },800);


            },600);

        }


    },600);


});








// ================= TYPING EFFECT =================


let roles=[

    "Java Full Stack Developer ☕",

    "DSA Problem Solver 🧠",

    "Backend Developer 🚀",

    "Future Software Engineer 💻"

];


let roleIndex=0;

let charIndex=0;


let typing=document.getElementById("typing");



function type(){


    if(charIndex < roles[roleIndex].length){


        typing.innerHTML +=
        roles[roleIndex].charAt(charIndex);


        charIndex++;


        setTimeout(type,100);


    }


    else{


        setTimeout(remove,1500);


    }

}



function remove(){


    if(charIndex>0){


        typing.innerHTML =
        roles[roleIndex]
        .substring(0,charIndex-1);


        charIndex--;


        setTimeout(remove,50);


    }


    else{


        roleIndex++;


        if(roleIndex>=roles.length){

            roleIndex=0;

        }


        setTimeout(type,300);

    }


}


type();









// ================= SCROLL ANIMATION =================


let items =
document.querySelectorAll(

"section,.skills div,.project,.glass"

);



items.forEach((item)=>{


    item.style.opacity="0";

    item.style.transform=
    "translateY(80px)";


    item.style.transition="1s";


});




window.addEventListener("scroll",()=>{


items.forEach((item)=>{


let pos =
item.getBoundingClientRect().top;



if(pos < window.innerHeight-100){


item.style.opacity="1";

item.style.transform=
"translateY(0)";


}


});


});









// ================= AI CHAT BOT =================


const openChat =
document.getElementById("openChat");


const closeChat =
document.getElementById("closeChat");


const chatbot =
document.querySelector(".chatbot");


const sendBtn =
document.getElementById("sendBtn");


const input =
document.getElementById("userInput");


const chatBody =
document.getElementById("chatBody");




openChat.onclick=()=>{

    chatbot.style.display="block";

}



closeChat.onclick=()=>{

    chatbot.style.display="none";

}





sendBtn.onclick=()=>{

    sendMessage();

}



input.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){

sendMessage();

}


});





function sendMessage(){


let msg=input.value.trim();



if(msg==="") return;



chatBody.innerHTML +=

`

<div class="user-message">

${msg}

</div>

`;



setTimeout(()=>{


chatBody.innerHTML +=

`

<div class="bot-message">

${botReply(msg)}

</div>

`;



chatBody.scrollTop=
chatBody.scrollHeight;



},500);



input.value="";


}









function botReply(msg){


msg=msg.toLowerCase();




if(msg.includes("skill")){


return `

Amit Skills 🚀 <br><br>

☕ Java <br>
🧠 DSA <br>
🌐 HTML CSS JS <br>
🌱 Spring Boot

`;

}




else if(msg.includes("project")){


return `

Projects 💻 <br><br>

🛒 E-Commerce Website <br>

🤖 AI Portfolio Assistant

`;

}





else if(
msg.includes("contact") ||
msg.includes("email")
){


return `

Contact Amit 📩 <br><br>

GitHub ✔ <br>

LinkedIn ✔ <br>

WhatsApp ✔

`;

}





else if(msg.includes("resume")){


return `

Download Resume button se
Amit ka resume mil jayega 📄

`;

}



else{


return `

Hi 🤖 I am Amit AI.

Ask me about:

✔ Skills
✔ Projects
✔ Resume
✔ Contact

`;

}


}










// ================= EMAIL JS =================


// yaha apni EmailJS key dalna

emailjs.init("YOUR_PUBLIC_KEY");



let form =
document.getElementById("contactForm");



form.addEventListener(
"submit",

(e)=>{


e.preventDefault();



let data={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


message:
document.getElementById("message").value


};





emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

data

)


.then(()=>{


alert(
"Message Sent Successfully 🚀"
);


form.reset();


})


.catch(()=>{


alert(
"Message Failed ❌"
);


});


}

);









// ================= SECRET FEATURE =================


document.addEventListener(
"keydown",

(e)=>{


if(e.key.toLowerCase()==="a"){


alert(

"🚀 Welcome To Amit Developer Universe"

);


}


});