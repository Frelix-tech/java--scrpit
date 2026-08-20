//=======================================================================
//   1.  Variables in JavaScript
//=======================================================================


// const account = 1235
// let accountEmail = "utsav"


// accountEmail = 5655

// console.log(accountEmail);

// console.table([account,accountEmail])


//======================================================================
//    Notes 
//======================================================================
/*const is use for to make value fixed 
  In let value can be change
  console.log() is used to display the item in terminal 
  console.table([]) is used to display more then i item at once

*/  



//=======================================================================
//  2.   Data Types in JavaScript
//=======================================================================

// let name = "utsav" // data type = "string" 
// let age = 20 // data type = "number" , number=> 2 to powwr 53
// let isMarried = false // boolean => true/false
// let address = null // null => standalone value
// let phoneNumber; // data type = "undefined"
// symbol => unique identey
// to know  the data type of the value we use console.log(typeof variableName)


//=======================================================================
//   3. Datatype Conversation
//=======================================================================

// let sorce = 500

// console.log(typeof sorce);

// let valueNumber = Number(sorce)
// console.log(typeof valueNumber);
// console.log(valueNumber);

//=======================================================================
//     Notes
//=======================================================================

// Number is used to convert the data type into number 
// String is used to convert the data type into string
// Boolean is used to convert the data type into boolean
// when can easily convert the string into number
// we cannot convert the "33abc" int to number the data type is NaN
// true is converted into 1 and false =0 
// 1=> true ; 0=> false ; "" => false ; "vaule" => true


//========================================================================
//   4. Operations
//========================================================================

/* 
      basic operaters

+ for additions
- for subtractions
* for mutipilcations
/ for divisons
// for getting quanist 
** for power of number
% for getting render

*/

/*
add two string wew write ; "str1" + "str2" = str1str2
if we do console.log("1"+2) => 12
         console.log(1+"2") => 12 
         console.log ("1"+2+2) => 122 
         console.log( 1+2+"2") => 32

*/
/* not to use this type to write code */
//  let num1 , num2 , num3 
// num1=num2=num3=2+2

/*========================================*/

//==================================================
//   5. Comprasion
//==================================================

/*
we can't compare the sring to number
null>=0 ,true ; nul==0 and > 0 are false
undifined== , > = , > 0 are false
when we use === it check the data type and value 
*/


//=================================================
//  6. Primitive datatype
//=================================================

// 7 types: string,number,boolearn,null,undefinied,bigint

// we didn't  need to define the type of variable
// their is not int and float numbers 
// const id = symbol('123')
// cont anotherId = symbol('123)
// const id =! const anotherId


//================================================
//  7. reference (non primitive)
//================================================

// Array,objects,functions

// Array examples
// const heros = ["iron man"," spiderman","frelix"]  
// we write array in [] brackets and "" quetes
//to convert any variable to object we have to add new'name of object'()

/*  Object example 
let myObj = {
      name: " frelix",
      age: 22,
}
*/

/*
const myFunction = function(){
  console.log("Hello world")
}

console.log(type of myFunction) rturn function 
*/

//=======================================================
//     8.   memory
//=======================================================
//  two type of memory


// Stack(primitive),  Heao(non-primitive) 
/*
1. stack(primitive) memory => provide copy of variable data for another variable if we use same variable to asign the vaule to differnt variable ,
                              in this main data did not change
2. Heap(non-primitive) memory => provide direact access to the main data of the variable if we use same variable to asign the vule to other variable

*/

// Example of Stack memory
/**
 let name = "utsav mali"
 let anotherNAme = name

 anotherName = "abhinav"
 console.log(name); // Output => utsav mali
 console.log(anotherNme)' // Output => abhinav 
 console.log(name); // Output => utsav mali
 */

// Example of Heap memory
/*
 let userOne = {
        email: "user@google.com"
        upi: "user@ybl"
 }
  let userTwo = userOne
  
  userTwo.email = "ustavgoogle@.com"
  
  console.log(userOne.email);  output =>  ustavgoogle@.com
  console.log(userTwo.email);   output => ustavgoogle@.com
  // same output because we change the main data of the variable
  
*/

//=====================================================
//   Number datatype
//=====================================================

/*
java script automaticly set the number to number datatype 
to convert number to string we use .toString() and to count the length of the string we use .length
to add the decimal digit we use .toFixed()
.toPrecission() is the function is used to when we have know how much the digits before the decimal
when we use .toLocaleString() function on the big number it add commas as per usa stand 
if we want to convert into india style use .toLocaleString('en-In')

*/

//=======================================================
//      Math
//=======================================================

/*
math libary was in built in javaScript 
we can convert only -ev to +ve by using math.abs(num) function 
to roundup of the value we use math.round(num) , it convert as we use in daily life if>0.5 next vaule visa-versa
math.ceil(num) function is used to roundup the vaule to the greater side
math.floor(num) function is used to roundup the vaule to lesser side 
math.min( array) fuction is used to find the minimum value in array
math.max(array) function is used to find the maxmium value in array
when we use math.random() function javascript the number between 0 to 1 

*/

//=========================================================
//   Date and time
//=========================================================

// lets make first variable to example easly
/*
 const date = newDate()
*/

/**
 when we use .toString() function for dates and times it show real date , time and time zone
 when we use .toDateString() function for dates and times it show onl real dates
 when we use .toLocaleString() function for dates and time its d=show it ike this mm//dd/yyyy and hr:min:sec pm/am
 the type of the variable is object
 we can assign the date byy use like this
 let newDates = newDate(2030,0,5)
 in this 2030 refer to the year 
 in this 0 refer to the month 
 and the 5 refer to the date of the day
 if we add more in this it let us to hrs,min,sec 
 to specific day , month ,year, time , we use
 .toDay() = for day
 .toMonth() = for month
 .toYear() = for year
 when we use .tolocaleString we can add more detail in the dates and time by its use
*/

//=============================================================
//     Array
//=============================================================

/*
 array is placed in [] bracates
 inside bracets [1,22, "defaut" , true ] all the things are element
 array is used to store more value inside on variable 
 inside this we can add any datatype
 in javascript we can add more element after it was make 
 we also can indiviusal element by using indexing lke this
 console.log(arry.[indexing number])
 array indexing start with 0
 when we do copy operateion in array it make shallow copyes not deep copyes
 shallow copyes = it means it use same refernces point 
 deep cpoyes = it means it didn't use  same refernces point
 when we make array like this we didn't want to put the [] brakets 
 const array = newArray(1,2,3,5,)
*/

// Array method

/*
 we use .push(num) for add the num element at the end of the array 
 we use .pop() to remove the last element of the array 
 we use.unshift to add the element in start of the array after makeing the array
 we use .shift() to remove the element form the starting of the array
 we use .includes() is used to find that if the value is asked it true or flase
 we use .indexOf() is used to find the indexing of the given value if persent in array
 when we use .join on any array it join the array in another array and also convert it into string
 we use .slice(s,e) it print the start and 1< than end value but didn't change the original  array 
 we use .splice(s,e) it print the start and end value but change the orginal array  

*/


/*
 we didn't use .push to join to array , it make array inside array as an element
 we can use .concat we to add array , we have create new variable =  array1.concat(array2) , we only can join one array by this 
 function.
 we also can use sperad operator , we have to create new array = [ ...array1,...array2] , we can add as much array in this by 
 this operators
 .flat() is use to print all element in array or sub-array 
 we also can define how much deapth of the array javascript have to go by .flat(deapth)
 array.isArray(value) is used to check the value is a array or not 
 array.from(value) is used to make the value array
 array.of(variable) is used to make the group of variable into array
*/

//==========================================================
//   Objects
//==========================================================


// objects literals

/*
  //     Examples of object variable
  const sym = symbol("key1")

  const obj = {
    name: = " histesh ", 
    "fullName" : = "utsav mali",
    [sym]: "key1",
    age: = 15,
    email: "utav@gmail.com",
    isLoggedIn: flase,
    lastLoggedIn: ["monday", "friday"]
  }
*/

/*
we can create object like this const obj = {} , this object is empty .
by default javascript convert the keys of object into string.
to access the key of object we use , object.key or object["key"] 
to print the symbol datatype in as a member of object we write code like this , object[sym]
to change the value in object we can change it like this , object.key = "new item"
to freeze the object so no change happen in main object we use , object.freeze(object name)
in object we can create function by this
  object.key = function(){
    details we have to make
  }
we also can use string interpaliation in the fuction , we have use back ticks `` for this
  object.key2 = function(){
    console.log(`hello world , my name is ${this.name});
  }
this. function , when we use this function we can access the propertys inside the object
we can add object inside a object
to merage to object we use asign function
  const obj1 = {1:"1",2:"2"}
  const obj2 = {3:"3",4: "4"}
  const obj3 = object.assign({},obj1,obj2)
we can also use speard function 
const onj3 = {...obj1,...onj2}
*/

//============================================
//  Functions and parameter
//============================================

/**
the function is a variable which we can anywhere in the code and make use of it.
in function we store many codes which have to use in many place.
to write the function  we write [function name (){indie this we witre code whch we have to print any time}]
to exctue the function we have to write function name and () only 
if we write the function like {
  function name (num1,num2){
    console.log(num1+num2)
  }
}
in run this code properly we have to make the value clear by adding in function name(num1 value,num2 value),
so the code run properly.
when define the function at that time we those input called parameters.
or when running the function we assign the value called raguments.
when we store the function in differnet variable and run it show undefined
this problem happen because we didn't make to return the value from the function .
if we want ours code to show the value in newly created variable ,
 we write the function like {
  function name (num1,num2){
    let result = num1 + num2
    return result
  }
}
const name = name(3,5)
.console.log("result : ", result);
now it shows the function value in the consant name and print the value in console.
// remember [ after writng return in function no new command will work]
when the we make nested function the second one access the all the variable in first function but the first function can not access the the variable inside the nested
function.
it apply on all the opeartors like [if,for,function]
*/


//====================================
//   this and arrow function
//====================================

/*
 this function work in  for object
 this didn't work in array and function and arrow function
 if the function is store in cconst variable it also didn't work

// the general santace of arrow function is:
 () => {}
// if store in variable:
 const one = () => {}
if in this we write {} brackects we have to write return 
if in this we wrtie () brackects we didn't have to write return

*/

//==========================================================
// control flow
//=========================================================


//========================
// 1. basic opertors
//=======================
/*
the basic opertors to check the condition is true or false
1. < less then
2. > greater then
3. <= less then equal to
4. >= greater then equal to
5. == equal to
6. != not equal to
7. === it check that the data type of the value is same or not and also value is equal
8. && it is check that both the condition is true , if false it didn't goes to work 
9. || it is check that both from one condition is true , if true the whole code will work
10.?? : Nullish Coalescing  Operation
11. condition ? true : false , terniary opeartor
*/
// =========================
//  2. if statement
//==========================
 
/*
general way of writing the if statement is :-
if(condition = true,, true) { 
  whatever things if the condition is true
}
we also can write 
if(false){btween this brackects the code don't run}
outside theis {} brackects we can not access the variable what we have assign .
if the varriable is acccessable checck that your code is incoorect.
// ===============
//*************************************  not to apply in work ( only for knowlege)*******************************************
// **********************company did not accept this type of code *******************************
we can also write the if statement as
if(condition) console.log("true") we can only write one line in this code
to write multiple lines
if(condtion) console.log("test1"),
console.log("test2")
                        or               
if(condtion) console.log("test1"),console.log(test2);
//******************************************************************************


*/
//===========================
// 3. else statement
//===========================

/*
general way to write the esle statement is :-
first the if function comes 
if(conditon){
}esle{
}

*/

//============================================
//  4.  Nested statement
//===========================================

/*
if the program have mutiple condtion we will use nested statement
the genral way to write the nested statement is :-
if(condition){
}else if{
}more condition{
}else{
}
*/

//==============================================
// 5. switch 
//=================================================

/**
the general way to write switch is this :-
switch (key) {
  case value:
    
    break;

  default:
    break;
}
*/
/*
this statement is use when we don't have to waste time on nested statement 
let take an example to learn:-
const month =3
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("default");
    break;
}

//**************************************************
/*
this do same work as nested statement but it is easy to write and save time to work 
*/

//================================
//  true and false 
//================================

// **************************************************
//  falsy value
//***************************************************

/*
this value means they are fasle as we assuemed , we don't check if they are false or not
their are some value we assumed false value :-
1. false
2. 0
3. -0
4. BigINt
5. ""
6. null
7. undefined
8. NaN

*/


// *****************************************
//  truthy value
// ********************************************

/*
this value means they are true as we assuemed , we don't check if they are true or not
their are some value we assumed true value :-
aside from falsy value their are all truthy value
but some value will surpice you . you should know this
1. "0"
2. 'false'
3. " "
4. {}
5. []
6. function(){}

*/

// *****************************
// Nullish Coalescing  Operations 
//********************************

/*
it check which value should enter in variable like this :-
let val1;
val1 = 5 ?? 10
console.log(va1);  // output : 15
val1 = null ?? 10 
console.log(val1);  // output : 10 
val1 = undifined ?? 5
console.log(val1); // output :5
when the value we get from sever / backend is null/undefined value we have to make the code to word like this

*/

//==============================================================
//   jump statement
//==============================================================

//****************************************
//  1. break 
//****************************************

/* 
this only written in inside of loop 
This statement work as that when it run the it leave the scope and move outside the loop 
meaning it is used to stop the loop in middile
*/

//****************************************
//  2. continue
//****************************************

/*
this statement only written in loop .
this statement work as that when it run skip the indent of its rotation . but contiune the loop 
meaning when its condition comes true it skip the commard below this  
*/

//==============================================================
//  loops
//==============================================================


//*****************************************
// 1. for loop 
//*****************************************
/*
In this loop there is fixed range betwwen the range number will  print when the its run
the general way to write the for loop is :- 


for (let variable value = 0; variable value < array.length; variable value++) {
  const element = array[variable value];
  
}

we can make nested for loop as well as 


*/

//*****************************************
// 2.  while loop 
//*****************************************

/*
It works when the condition comes true 
in we need to update the the variable by Qurself
the general way to write the while is :-
while (condition) {
  
}

we also write the while loop with help of the array 
let aaray =[1,2,3,,4,5,6,7,8,9]
let a =0
while (a<array.length){
  console.log(`the value of array ${array[a]}`);
  a++
  }
*/


