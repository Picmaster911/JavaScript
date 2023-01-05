let countOfAnswerPoints=0;
let countOfTrueAnswer=0;

answer = prompt(`Is mouse a animal ?`).trim().toLowerCase();

if (answer=="yes" || answer==true ){
    countOfAnswerPoints = countOfAnswerPoints +10
    countOfTrueAnswer++
}
answer = prompt(`Has horse 4 foot  ?`).trim().toLowerCase();

if (answer==="yes" || answer==true ){
    countOfAnswerPoints = countOfAnswerPoints +10
    countOfTrueAnswer++
}
answer = prompt(`Has Earth shape of ball ?`).trim().toLowerCase();

if (answer=="yes" || answer==true ){
    countOfAnswerPoints = countOfAnswerPoints +10
    countOfTrueAnswer++
}
answer = prompt(`What color is the sky?`).trim().toLowerCase();

if (answer=="blue"){
    countOfAnswerPoints = countOfAnswerPoints +10
    countOfTrueAnswer++
}
answer = prompt(`How much will 2+2??  `).trim().toLowerCase();

if (answer=="4"){
    countOfAnswerPoints = countOfAnswerPoints +10
    countOfTrueAnswer++
}

alert (`You have is ${countOfAnswerPoints} points.\n
You answered correctly for ${countOfTrueAnswer}/5.).`);