function createTable() {
// Ця частина зренерована ChatGPT бо я не шарю як зробити інакше
for (let r = 0; r < 8; r++) {
    const row = document.createElement("tr"); // новий ряд

    for (let c = 0; c < 8; c++) {
        const cell = document.createElement("td"); // нова клітинка
        row.appendChild(cell);          // додаю клітинку у ряд
    }

    document.getElementById("myTable").appendChild(row); // додаю ряд у таблицю
}
}
createTable();

let gametime = document.querySelector('.Time p');
let middletime = document.querySelector('.MRT p');
let clicks = document.querySelector('.Clicks p');
let clicksamount = 0;
let middletimecontainer = [];

let gamesamount = 0;
let best = 0;

let game_started = false;

let stop1 = false
let time1 = 0
let stop2 = false
let time2 = 0


let games = document.querySelector('.GAMES');
let bestA = document.querySelector('.BEST');


let timeoutId;

function tick1() {
    if (stop1 == false) {
        time1 = time1 + 1.1;
        gametime.innerHTML = Math.round(time1) / 100;
        setTimeout(tick1, 10);
    } if (time2 > 150) {
        stop1 = true;
        return;
    }
}
function tick2() {
    if (stop2 == false) {
        time2 = time2 + 1.1;
       middletime.innerHTML = (time2 / 100).toFixed(2);
        timeoutId = setTimeout(tick2, 10);
    }
    else {time2 = 0;
        return;
    }
}



let startbutton = document.querySelector('.start');
     startbutton.addEventListener('click', () => {

    if (game_started == false) {
        

        clicksamount = 0;
        clicks.innerHTML = clicksamount;
        startbutton.style.backgroundColor = "#0c4069ff";
        game_started = true; 
        time1 = 0;
        stop1 = false;
        tick1();
        edit_td();


    }
     
    return;

})



function edit_td() {

    clearTimeout(timeoutId);
    time2 = 0;
    stop2 = false;
    tick2();


    const tdElements = document.querySelectorAll('#myTable td');
    tdElements.forEach(td => {

        td.style.backgroundColor = '';
        const newTd = td.cloneNode(true);
        td.parentNode.replaceChild(newTd, td);
    });


    const freshTdElements = document.querySelectorAll('#myTable td');
    const randomIndex = Math.floor(Math.random() * freshTdElements.length);
    const randomTd = freshTdElements[randomIndex];


    randomTd.style.transition = "0.5s ease";
    randomTd.style.backgroundColor = "red";


    randomTd.addEventListener('click', () => {
        if (time2 < 150) {
            middletimecontainer.push(time2 / 100);
            console.log(middletimecontainer);
            edit_td(); 
            clicksamount = parseInt(clicksamount) + 1;
            clicks.innerHTML = clicksamount;
        }else{
            stop2 = true;
           
         middletime.innerHTML = 0;
          let totalSum = parseFloat(middletime.innerHTML) || 0; 
         for (let i = 0; i < middletimecontainer.length; i++) {
         totalSum += parseFloat(middletimecontainer[i]);
         }

           middletime.innerHTML = Math.round(totalSum.toFixed(2) / middletimecontainer.length * 100) / 100 ; 
             
            gamesamount = gamesamount + 1;
            games.innerHTML = "Games: " + gamesamount;
            

            if (clicksamount > best) {
            best = clicksamount;
            bestA.innerHTML = "BEST: " + best;
          }
         startbutton.style.backgroundColor = "#1a93f7";
         game_started = false

         const tdElements = document.querySelectorAll('#myTable td');
          tdElements.forEach(td => {
        td.style.transition = "0.5s ease";
         td.style.backgroundColor = '';});

         return;
            
        }
    }, { once: true });


}          



     


    

