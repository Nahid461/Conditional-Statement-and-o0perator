//switch case

let days = 2;
let message;

switch(days){
    case 1: 
       message ="sun"
    break;

    case 2:
       message = "mon";
    break;

    case 3: 
       message ="tue";
    break;  

    case 4: 
       message ="wed";
    break;

    case 5: 
       message ="thu";
    break;

    case 6: 
       message ="fri";
    break;

    case 7: 
       message ="sat";
    break;

    default:
       message ="Days must be between 0 to 7 only";
    break;

}
 console.log(message);