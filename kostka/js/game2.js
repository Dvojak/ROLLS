const dice = document.getElementById("dice");
const result = document.getElementById("result");
const play = document.getElementById("play");


let roll = 0; // Aktuální hod
let rolls = []; //pole pro ukládání hodu
let timer = false;

play.addEventListener('click', function(){
    if(timer){
        clearInterval(timer);
        roll = Math.ceil(Math.random()* 6);
        dice.src = `img/kostka${roll}.png`;
        rolls.push(roll);
        result.innerHTML = stats();
        timer = false;
        play.innerText = 'Hrej';
    }
    else{
        timer = setInterval(function(){
            roll = Math.ceil(Math.random()* 6);
            dice.src = `img/kostka${roll}.png`;
        
        } , 50);
        play.innerText = 'Stop';
    }
});
function maxroll(){
    let mx = 1;
    for (let i = 0; i < rolls.length; i++) {
        if(mx < rolls[i]) mx = rolls[i];
    }
return mx;
}
function minroll(){
let min = 6
for (let i = 0; i < rolls.length; i++) {
    if(min > rolls[i]) min = rolls[i];
}
return min;

}
function sum(){
    let s = 0;
    rolls.forEach(value =>{
        s += value;
    });
return s;
}


function stats(){
    let result = ' ';
    result += `Aktuální hod: ${roll} <br>`;
    result += `Počet hodů: ${rolls.length} <br>`;
    result += `Součet hodů: ${sum()} <br>`;
    result += `Průměr hodů: ${(sum()/rolls.length).toFixed(2)} <br>`
    result += `Nejvyšší hod: ${maxroll()} <br>`;
    result += `Nejnižší hod: ${minroll()} <br>`;
    return result;
}
