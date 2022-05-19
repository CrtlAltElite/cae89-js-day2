// Date in JS

let day = new Date();
console.log(day);
day = day.getDay();
console.log(day);

let literalDay=new Date().toString()
console.log(literalDay)
console.log(literalDay.split(' '))
console.log(literalDay.split(' ')[0])
literalDay=literalDay.split(' ')[0]
//0 is sunday
// 6 is sat
day = 15
// Switch Case Statement !!!
switch(day){
    case 0:
        console.log("Go To Church");
        break;
    case 1:
        console.log("Write Code.. Its a Monday");
        break;
    case 2:
        console.log("Testing Tuesday so Test you Code");
        break;
    case 3:
        console.log("Testing more code because its HUMp DAAAYY!!!!");
        break;
    case 4:
        console.log("Write a feature for out App on Thursday")
        break;
    case 5: 
        console.log("Test Feature for Feature Friday");
        break;
    case 6:
        console.log("Sleep All Day");
        break;
    default:
        console.log("You Are making up days");
}


switch(literalDay){
    case 'Sun':
        console.log("Go To Church");
        break;
    case 'Mon':
        console.log("Write Code.. Its a Monday");
        break;
    case 'Tue':
        console.log("Testing Tuesday so Test you Code");
        break;
    case 'Wed':
        console.log("Testing more code because its HUMp DAAAYY!!!!");
        break;
    case 'Thu':
        console.log("Write a feature for out App on Thursday")
        break;
    case 'Fri': 
        console.log("Test Feature for Feature Friday");
        break;
    case 'Sat':
        console.log("Sleep All Day");
        break;
    default:
        console.log("You Are making up days");
}
