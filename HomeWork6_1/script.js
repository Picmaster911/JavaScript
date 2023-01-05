let sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];
let summer_sports =[];
let winter_sports =[];
let fruits =[];
let nameOutput=[`*** Winter sports ***`,`*** Summer sports ***`,`*** Fruits ***`]
winter_sports = sports.slice(0,5);
summer_sports = sports.slice(5,11)
fruits =winter_sports.splice(2,1).concat(summer_sports.splice(2,2));

let allArray = [winter_sports,summer_sports,fruits]

for (i=0; i<nameOutput.length; i++) {
    console.log(nameOutput[i]);
 let lengthNow = allArray[i].length;
     for ( j = 0; j < lengthNow; j++) {
         console.log(allArray[i][j].join(`:`));
         if (j===lengthNow-1){
             console.log(``);
         }
    }
}

