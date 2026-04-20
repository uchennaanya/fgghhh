// alert("Welcome")
// alert("On board")

// console.log("Welcome on board")

// document.write("Welcome here.")

// let heroText = document.getElementById("heroText").innerHTML = `We are replacing from JS`

// console.log( typeof heroText)

let nums = 9
console.log(nums > 8)

let myNums = 999999999999999999999n
console.log(typeof myNums  )

/* JS Operators:

 Arithmetic operator: *- multiplication, - minus, /- division, + addition **-Exponentiation % - Modulus(Reminder) ++ increment -- decrement,

 Logical Operator: && logical and, || logical or, ! logical not.

 Comparison Operators ==: equal to, ===: equal value and equal type, != not equal in value, !== not equal value or not equal type, > greater than, < less than, >= greater than or equal to, <= less than or equal to,

 Assignment Operator: =
*/

let namess = null;

console.log(typeof namess)

/*
    javaScript Object
*/

// let num1  = prompt("Provide num1")
// let num2  = prompt("Provide num2")

// alert(+num1 - +num2)

// console.log(this)

// const myObject = {
//     name: "Uche",
//     age: 20,
//     address: "Eneka",
//     myBio(){
//         return `Hi! my name is ${this.name}, and i am ${this["age"]} yrs old, I live at ${this.address}`
//     }
// }

// console.log(myObject.myBio())

// console.log(myObject["address"])
// console.log(myObject.name)
// console.log(myObject.age)

// Object Constructor function

function MyPerson(fname, lname, eye){
    this.fnames = fname
    this.lnames = lname
    this.eye = eye
    this.age = 20
    this.myBio = function(){
        return `${this.fname} ${this.age}`
    }
}

const myPerson1 = new MyPerson("Mat", "Ann", "Blue")
const myPerson2 = new MyPerson("Jone", "Pen", "light")
const myPerson3 = new MyPerson("Rolls", "Jing", "pink")
const modifylname = new MyPerson("Ugo", "Okoro")

console.log(myPerson1.fnames, myPerson1.lnames, myPerson1.eye, myPerson1.age)
console.log(myPerson2.fnames)
console.log(myPerson3.myBio())

MyPerson.prototype.modifylname = function(lname){
    this.lnames = lname
}

console.log(modifylname.lnames)

// console.log(myPerson1 instanceof(MyPerson))

// javaScript Functions
// A function is block of code that does a thing/task {}

// Regular function

// function areaOfACircle(r){
//     const PI = 3.142
//     return PI*r*r
// }

// alert(areaOfACircle(5))
// alert(areaOfACircle(10))

const addNumbers = ((...numN) => console.log(numN.reduce((a,i) => a + i, 0)))(3, 5, 9, 5, 3, 8, 2, 9, 5);

// console.log(addNumbers(3, 5, 9, 5, 3, 8, 2, 9, 5))

// javaScript Conditionals

// let vname = prompt("Your name")
// let age = prompt("Your age")

// age >= 18 && age <= 85 ? alert(`Welcome ${vname} go ahead and cast your vote`)
// : alert(`Your not eligible`)

// The switch statement
// syntax: switch(expression) {
        // case x:
            // code block
            // break;
        // case y:
            // code block
            // break;
        // default:
            // code block
// }



// switch(true){
//     case (age >= 18 && age <= 85):
//             result = `Welcome ${name} go ahead and cast your vote`
//         break;
//     default:
//         result = "Your not eligible"
// }

let numOfStudent = 10
let i = 1;

// for( i=1; i <= numOfStudent; i++){
//     console.log(i)
// }

// while(i <= numOfStudent){
//     console.log(i);
//     i++;
// }

// Do while

// do {
//     console.log(i)
// }
// while(i <= numOfStudent)

// javaScript Array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(myArray[myArray.length-1])

myArray.pop()
myArray.shift()
myArray.unshift(90)
myArray.push(200)

console.log(myArray.length)

// Array methods, these are basically methods used for manipulating arrays, and they accept call back functions
const familyNamess  = ["Au", "Jone", "Ola", "Ben"]
console.log(myArray.reduce((a, acc) => a + acc, 0))
console.log("_____________________")
console.log(familyNamess.map((a, i, arr) => a + " Njoku"))

const dimension = [[1, 2, 3, 4], [9, 0, 3, 100]]

console.log(dimension.flat())
const flattenedArray = dimension.flat()
console.log(flattenedArray.sort((a, b) => a - b  ))

// javaScript Date() object

const date = new Date()
console.log(date.getFullYear() - 1986)
console.log(date.toLocaleString())

let nn = Number("234.344555665")

console.log(nn.toFixed(2))

console.log(typeof nn)

// const mm = Math()

function urHead(r){
    r = Math.PI * Math.pow(r, 2)
    console.log(r.toFixed(2), "Radius")
}

urHead(4)

console.log(Math.trunc(Math.E))

console.log(Math.trunc(Math.sqrt(25)))
console.log(Math.ceil(Math.random() * 1000 + 1))

console.log(Math.max(2, 9, 100))
console.log(Math.min(2, 9, 100))
console.log(Math.log10(100))

// javaScript Object

let able = "\bI\\\n\"m good";
console.log(able)

console.log(able.concat(" and okay"))
console.log(able.includes("good"))

// javaScript class

class Person {
    constructor(name, age, address, phone) {
        this.name = name
        this.age = age
        this.address = address
        this.phone = phone
    }
    myThis() {
        console.log(this.phone)
    }

    callMe(){
        return this.name
    }
}

const   mythis = new Person("Uch", 20, "Rivers", "07062725788")
const   myName = new Person("Uch", 20, "Rivers", "07062725788")

mythis.myThis()
console.log(myName.callMe())

// Class Inheritance in javaScript using extends
class Me extends Person {
    constructor(name, age, address, contact, complexion, nativity){
        super(name, age, address, contact)
        this.complexion = complexion
        this.nativity = nativity
    }
    myThis(myState){
        return this.callMe() + " is a " + this.nativity + " state " + myState
    }

    static greet(){
        return "Hi " + this.age
    }
}

const me  = new Me("Adaobi", 34, "Abia", "090385849494", "Chocolate", "Nigerian")

console.log(me.myThis("Anambra"))

console.log(Me.greet())

// JAVAsCRIPT dom (DOCUMENT OBJECT MODEL)

// let myH2 = document.getElementById("myH2")

// console.log(myH2.innerHTML = "My apps")

// let name = document.querySelector("#name")
// let age = Number(document.getElementById("age"))
// let result = document.getElementById("result")

// console.log(name.type + "dgjdgsdmsgsmsdsdm,sdngmsdgnm,gm,ggn")

// result.innerHTML  = "Response: "

// console.log(name.value =  "Asa du")

// age.value = 40

function addNum(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let result = document.getElementById("result")

    let answer =  num1 + num2
    result.innerHTML = answer
}

let name1 = "Ann"
let age2 = 23

console.log(`My name is ${name1} and I am ${age2}`)


// javaScript promise

async function fetchData() {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    let displayList = document.getElementById("displayList");

    try {
        let resp = await fetch(url);
        let data = await resp.json();

        // let txt = '';

        // for (let i = 0; i < data.length; i++) {
        //     txt += "<li>" + "<h2>" + data[i].title + "</h2>" +   data[i].body + "</li>";
        // }

        let txt = data.map(item => `<li> <h2> ${item.id} ${item.title} </h2> ${item.body}</li>`).join('');

        displayList.innerHTML = txt;

    } catch (error) {
        console.log(error);
    }

    console.log(displayList, "This is it");
}

fetchData()

// javaScript Events
// Events are user action i.e anything that the user is doing within the page is an event


