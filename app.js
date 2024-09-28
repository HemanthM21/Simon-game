let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let colors = ["yellow", "red", "green", "blue"];

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started!");
        started = true;

        levelUp();
    }
});

function gameflash(button) {
    button.classList.add("flash");
    setTimeout(function() {
        button.classList.remove("flash");
    }, 300);
}

function userflash(button) {
    button.classList.add("userflash");
    setTimeout(function() {
        button.classList.remove("userflash");
    }, 300);
}
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomindex = Math.floor(Math.random() * 4);
    let randomcolor = colors[randomindex]; 
    let randombtn = document.querySelector(`.${randomcolor}`);

    gameSeq.push(randomcolor);
    console.log(gameSeq);
    gameflash(randombtn);
}

function checkAns(index) {
    // let index = level -1;
    if(gameSeq[index] === userSeq[index]) {
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`;
        h3.innerHTML = `Your highest score was: ${level}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        resizeTo();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allbuttons = document.querySelectorAll(".btn");
for (button of allbuttons) {
    button.addEventListener("click", btnPress);
}

function resizeTo() {
    started = false;
    level =0;
    gameSeq=[];
    userSeq=[];
}