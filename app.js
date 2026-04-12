//let a = 3;
//let b = 7;
//console.log("sum is: " + (a + b));
//let x = 15;
//if (x >= 18){
//    console.log("you can allow");
//} else {
//    console.log("you cannot allow");
//}
//const a = 96;
//if (a >= 90){
//    console.log("A+");
//}else if (a >=80){
//    console.log("B");
//}else {
//    console.log("fail");
//}
//let day = 5;
//switch (day){
//    case 1:console.log("MON");
//    break;
//     case 2:console.log("TUE");
//    break;
//     case 3:console.log("WED");
//    break;
//    default:console.log("invalid day");
//}
//for ( j = 1; j < 5; j++){
//    console.log(j);
//}
//let i = 1 ;
//while (i <=10 ){
//    console.log(i);
//    i++;
//}
//let x = 2;
//do{
//    console.log(x);
//    x++;
//} while(x<=6);
//
//for (let i=0; i<=6; i++){
//    if(i==4)continue;//break;
//    console.log(i);
//}
//function test(){
//    return "Done";
//}
////alert("something wrong");
//console.error("eror coming");
////prompt ("enter your name");
//let firstname = prompt("enter your 1 name");
//let secondname =prompt("enter your2 name");
//let msg = "welcome " + firstname + " " + secondname;
//alert(msg);

//let n = prompt("enter a number");
//n = parseInt(n);
//for (i = n; i >= n; i= i+n){
//    console.log(n);
//}

//let favoritemovie = "Avatar";
//let guess = prompt("guess the movie");
//
//while(guess != favoritemovie){
//    guess = prompt(" wrong try again");
//  
//}
//if(guess == favoritemovie){
//      console.log("congrs")
//      console.log("you 1quite");
//}


const max = prompt("Enter the max number");

const random = Math.floor(Math.random() +max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
       if(guess == random) {
        console.log("you are right! congrats!! random number was",random);
        break;
    } else if(guess < random){
        guess = prompt("hint : your guess was too small.please try again");
    } else {
        guess = prompt("hint: your guess was too large.please try again");

    }

}