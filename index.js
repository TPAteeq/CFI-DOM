//alert("this is from external")

// console.log("This is using console log")

// console.log(typeof(true));
// console.log(typeof(20));
// console.log(typeof("hello"));


// let myName = "Ateeq"
// myName = "Hellooooo"

// console.log(myName);


// let yourName = prompt("Please enter your name")

// console.log(yourName);
// alert("Hello " + yourName + " , your name has a length of " + yourName.length)

// console.log(2+3);
// console.log(3-2);
// console.log(3*3);
// console.log((4/3).toFixed(3));
// console.log(4%3);
// console.log(17%2);

// let x = 5;
// x++;
// x--

// x %=  4
// console.log(x);



// function print(){
//     console.log("hello");
// }

// print()

// let x= 5;
// let y=2;
// let sum = x + y
// console.log(sum);


// function sum(a,b){
//     console.log(a+b)
// }

// sum(2,3)
// sum(5,9)
// sum(8,6)


// function getChocolates(money){
//     console.log(Math.floor(money/1.5))

//     return (money%1.5)
// }

// let change = getChocolates(10)
// console.log(change);


// function diceRoll(){
//     let random = Math.random()*6
//     return Math.floor(random + 1)
// }

// let output = diceRoll()

// if(output == 6){
//     console.log("Congrats, bail hogayi");
// }else {
//     console.log("You didn't get out")
// }


// if(3 >= 3){
//     console.log("first is largest");
// }else {
//     console.log("second is largest");
// }


// function largest(a,b,c){
//     if(a>b && a>c){
//         console.log(a + " is the largest");
//     }else if(b > c){
//         console.log(b + " is the largest")
//     }else {
//         console.log(c + " is the largest");
//     }
// }

// largest(10000,200,30)

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);



// while(true){
//     console.log(1);
// }

// let count = 1;
// while(count <=100){
//     console.log(count);
//     count++
// }

// for(let count = 1; count <=100; count++){
//     console.log(count)
// }



// Omer
//Rahmath
// Shabbir
// Simrah

// let guestName = prompt("enter your name")

// if(guestName == "Omer"){
//     alert("Welcome")
// }else if(guestName == "Shabbir"){
//     alert("Welcome")
// }else if(guestName == "Rahmath"){
//     alert("Welcome")
// }else{
//     alert("out")
// }


// let nums = [1,2,3,4,5]

// console.log(nums[3]);


// let guests = ["Adnan","Omer","Shabbir","Rahmath"];


// function check(){
//     let guestName = prompt("enter your name")

//     for(let i = 0; i < guests.length; i++){
//         if(guests[i] == guestName){
//             console.log("You are welcome")
//             return
//         }
//     }

//     console.log("Better luck next time");
// }

// check()


// document.querySelector("h1").innerHTML = "Hola"
// console.log(document);

// console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[0].innerHTML = "This is manipulated"

// console.log(document.getElementById("HI"));


// console.log(document.querySelectorAll("p"));


let heading = document.querySelector("h1")
let button = document.querySelector("#btn")

button.addEventListener("click", ()=>{
    heading.innerHTML += "World "
})