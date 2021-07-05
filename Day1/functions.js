// document.write("1st way of code execution in javascript");
// alert("2nd way of code execution in javascript")
// document.getElementById("demo").innerHTML="3rd way of code execution in javascript"

// **function 
// function hello(){
//     document.write("hai friends");
// }

// **return 
// function multiply (a){
//     document.write("Hello")
//     return a * a * a;
// }
// document.write(multiply(5));

// **variable 
// var a = 20;
// var b = 30;
// document.write(a + b);

// **local variable //we should use that variable within that function only in - {}
// function add (){
//     var x = 150;
//     document.write(x);
// }
// add();

// ** global variable //we can call that variable anywhere u want many times 
// var x = 45;
// function a (){
//     document.write(x);
// }
// a ();
// document.write(x * 2);
// document.write(x - 2);
// document.write(x + 2);

// ** data types 1.Number, 2.String, 3.Boolean, 4.Regular Expression, 5.Array
// **1.number datatype
// var x = 5;
// var y = 2.5;
// function hai(){
//     document.write(x, y);
// }
// hai();

// **2.string datatype
// var str = "Sweety";
// function stringExample(){
//     document.write("Hello " + str);
// }
// stringExample();

// ** 3.boolean 
// var x = true;
// function hello(){
//     document.write(x);
// }
// hello();

// **4.regular expression 
// var a = 10.2;
// var b = 20.3;
// var c = a + b;
// function add(){
//     document.write(typeof(c));
// }
// add();

// ** 5.Arrays
// var a = ["Grace" , " sweety"];
// function hello(){
//     for(i=0; i<a.length; i++){
//         document.write(a[i] + "</br>");
//     }
//     }
// hello();

// **operators 6 types 1.arthmetic 2.Assignment 3.comparision/relational 4.Bitwise 5.Logical 6.Special 
// **1.Arthmetic (+ - * / % ++ --)
// var x = 20;
// var y = 45;
// function hello(){
//     document.write(x + y);
// }
// hello();

// **2.Assignment (= += -= *= /= %=)
// var x = 20;
// x%=11
// function hello(){
//     document.write(x);
// }
// hello();

// **3.Comparision (== != < <= > >=)
// var x = 40;
// var y = 35;
// function operators(){
//     if(x <= y){
//         document.write("True");
//     }
//     else{
//         document.write("False");
//     }
// }
// operators();

// **4.Bitwise (& | ^ ~ << >> >>>)
// var x = 40;
// var y = 35;
// var z = 50;
// var x = "vinuthna";
// var y = "grace";
// function operators(){
    // if(x > y & x > z){
    //     document.write("x is big");
    // }
    // else if(y > z){
    //     document.write("y is big");
    // }
    // else{
    //     document.write("z is big");
    // }

// if(x == "vinuthna" | y == "grace"){
// document.write("Welcome Grace")
// }

// }
// operators();

// **5.Logical (&& || !)
// var x = "vinuthna";
// var y = "grace";
// function operators(){
// if(x == "vinuthna" && y == "grace"){
// document.write("Welcome Grace")
// }
// else{
//     document.write("False")
// }
// }
// operators();

// **6.Special (?: ,, delete in instanceof new)

// ** if else statement 
// var marks = 44;
// function condition(){
//     if(marks > 90 ){
//         document.write("A grade");
//     }
//     else if(marks > 50) {
//         document.write("B grade")
//     }
//     else{
//         document.write("fail")
//     } 
// }
// condition();

// ** Loops in javascript 1.for 2.while 3.do-while 
// **for Loop
// function loop(){
//     for(i=0; i<=10; i++){
//         document.write("2 * " + i + " = " + 2*i + "</br>");
//     }
// }
// loop();

// **while loop if condition is false it will not execute any answer
// var i = 0;
// function loop(){
//     while(i<=50){
//         document.write(i + "</br>");
//         i = i + 2;
//     }
// }
// loop();

// **Do while either condition is false it will execute once
// var i = 51;
// function loop(){
//     do{
//     document.write(i + "</br>");
//     i = i +2;
//     }
//     while(i<=50 );
//     }
// loop();

// **Switch statement 
// var marks = 38;
// function stat(){
//     switch(true){
//         case marks > 90 : result= "A Grade";
//         break;
//         case marks > 75 : result= "B Grade";
//         break;
//         case marks > 60 : result= "C Grade";
//         break;
//         case marks > 40 : result= "D Grade";
//         break;
//         case marks > 36 : result= "E Grade";
//         break;
//         default : result ="Fail";
//     }
//     document.write(result);
// }
// stat();

// **Objects in javascript
// var student1 = {rno : 101, name:"Grace", branch:"Computers"};
// function hello(){
//     document.write(student1.rno + "" + student1.name + "" + student1.branch);
// }
// hello();

// function student(rno, name, branch){
// this.rno=rno;
// this.name=name;
// this.branch=branch;
// }
// var stu1=new Student(10, "grace", "cs");
// document.write(stu1.rno + " " + stu1.name + " " + stu1.branch);
 
// **Date & Time 
// var today=new Date();
// var day=today.getDate();
// var month=today.getMonth()+1;
// var year=today.getFullYear();
// var h=today.getHours();
// var m=today.getMinutes();
// var s=today.getSeconds();
// function dateTime(){
//     document.write(day + "/" + month + "/" + year);
//     document.write(h + ":" + m + ":" + s );;
// }
// dateTime();

// function getTime(){
// var today=new Date();
// var h=today.getHours();
// var m=today.getMinutes();
// var s=today.getSeconds();
// document.getElementById("abhi").innerHTML=h + ":" + m + ":" + s;
// setInterval("getTime()", 1000);
// }
// getTime();

// **Methods
// first()
// firstSecond()

// **string Objects in js 
// var x = "Hello";
// var y = "Welcome";
// function add(){
//     document.write(x + " " + y);
// }
// add();

// **position of letter 
// var x = "Hello World";
// function add(){
    // document.write(x.charAt(4));
    // document.write(x.indexOf("Hello"));
    // document.write(x.toLowerCase());
    // document.write(x.toUpperCase());
    // document.write(x.slice(2, 5));
// }
// add();

// **math objects
// **square root 
// var x = 100;
// function helo(){
//     document.write(Math.sqrt(x));
// }
// helo();

// **random 
// var x = 50;
// function helo(){
//     document.write(Math.random(x));
// }
// helo();

// **powers 
// function helo(){
//     document.write(Math.pow(2, 5));
// }
// helo();

// **obsolute 
// var x = -100;
// function helo(){
//     document.write(Math.abs(x));
// }
// helo();

// **floor
// var x = 14.92;
// function helo(){
//     document.write(Math.floor(x));
// }
// helo();

// **ceil
// var x = 4.95;
// function helo(){
//     document.write(Math.ceil(x));
// }
// helo();

// **round
// var x = 4.95;
// var y = 4.4;
// function helo(){
//     document.write(Math.round(y));
// }
// helo();

// **Browser object model 6 types

// *1*Window object
//**alert
// window.alert("Hello Grace");
// alert("Hello");

// **confrim
// window.confirm("Hello")
// confirm("Hello")

// **prompt
// var x=prompt("Who are u?");
// function message(){
//     document.write(x);
// }
// message();

// **open
// function add(){
//     open("http://www.google.com");
// }
// add();
 
// **close
// close();

// **size interval
// var w=window.innerWidth;
// var h=window.innerHeight;
// function add(){
//   document.write(w + " " + h);
// }
// add();

// **set interval
// function myFunction(){
//     document.write("Hello");
// }
// setInterval(myFunction, 2000);

// **set timeout
// function myFunction(){
//     document.write("Your time is over");
// }
// setTimeout(myFunction, 2000);

// *2*History object 2 - back, forward
// ** backward
// function goBack(){
//     history.back();
// }

// // **forward
// function goForward(){
//     history.forward();
// }

// *3*Navigator object 9 types
// document.write(navigator.appName + "</br>"); 
// document.write(navigator.appVersion + "</br>");
// document.write(navigator.appCodeName + "</br>");
// document.write(navigator.cookieEnabled + "</br>");
// document.write(navigator.userAgent + "</br>");
// document.write(navigator.language + "</br>");
// document.write(navigator.platform + "</br>");
// document.write(navigator.product + "</br>");
// document.write(navigator.javaEnabled() + "</br>");

// *4*screen object
// document.write(screen.width + "</br>");
// document.write(screen.height + "</br>");
// document.write(screen.colorDepth + "</br>");
// document.write(screen.pixelDepth + "</br>");

// *5*location object
// document.write(location.href + "</br>")
// document.write(location.hostname + "</br>")
// document.write(location.pathname + "</br>")
// document.write(location.protocol + "</br>")
// document.write(location.assign("http://www.google.com") )

// *6*cookies
// (required)1.name 2.value (optional)3.expires 4.path 5.domain 6.security

// function setCookie(cname, cvalue, exdays){
// var d = new Date();
// d.setTime(d.getTime() + (exdays*24*60*60*1000));
// var expires = "expires=" + d.toGMTString();
// document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname){
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie) ;
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i < ca.length; i++){
//         var c = ca[i];
//         while(c.charAt(0) == '' ){
//             c = c.substring(1);
//         }
//         if(c.indexOf(name) == 0){
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// function checkCookie(){
// var user =getCookie("username");
// if(user != ""){
//     alert("welcome again " + user);
// }
// else{
//     user = prompt("please enter your name : ", "");
//     if(user != " && user != null"){
//         setCookie("username", user, 30);
//     }
// }
// }

// **DOM(document object model) 3 methods
// *1*write()
// document.write("Hello");

// *2*getElementById()
// function getcube(){
//     var num=document.getElementById("number").value;
//     document.write(num*num*num);
// }

// *3*getElementByName()
// function printvalue(){
//     var name=document.form1.urname.value;
//     document.write(name);
// }

// **changing html element 3 types
// *1* changing content
// function printvalue(){
//     document.getElementById("p1").innerHTML="Welcome to javascript world";
// }
// printvalue();

// *2* changing value
// function printvalue(){
//   document.getElementById("myimg").src="./download (1).jpeg";
//     }
// printvalue();

// *3* changing style
// function printvalue(){
//   document.getElementById("p2").style.color="blue";
//     }
// printvalue();

// **Events in javascript 4 types
// *1*onclick
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *2*ondblclick
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *3*onmouseover
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *4*onmouseout
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *5*onfocus
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *6*onblur
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *7*onchange
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *8*onload
// function event1(){
//     document.getElementById("p1").innerHTML=Date();
// }

// *9*onsubmit
// function event1(){
//     document.getElementById("p1").innerHTML="Hello Welcome World";
// }

// *10*onreset
// function event1(){
//     document.getElementById("p1").innerHTML="All values are cleared";
// }

// **Form validation
// *1* password validation
// function validpassword(){
//     var password=document.myform.password1.value;
//     var cpassword=document.myform.password2.value;
//     if(password.length<6){
// alert("Password must contain 6 characters");    
// return false;
// }
// if(password==cpassword){
// return true;
// }
// else{
//     alert("Password and confirm password must be same");
//     return false;
// }

// }

//*2* name validation


// *3* email


// *4* date


// *5* mobile number












