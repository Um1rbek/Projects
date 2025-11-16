//1
var ball = +prompt("nechi ball oldingis? ")
if(ball <= 80){
    alert("o'qishga kira olmadingiz")
}else if(ball >= 80 && ball < 100){
    alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz ")
    var money = +prompt("qancha pulingiz bor:")
    if(money >= 3000){
        alert("Siz oqishga qabul qilindingiz!") 
    }else{
        alert("Uzur oqishga kirish uchun kerakli miqdorda pul kerak!!")
    }
}else if(ball >= 100 && ball < 130){
    alert("siz kontrakt asosida qabul qilindingiz ")
    var money = +prompt("qancha pulingiz bor:")
    if(money >= 2000){
        alert("Siz oqishga qabul qilindingiz!") 
    }else{
        alert("Uzur oqishga kirish uchun kerakli miqdorda pul kerak!!")
    }
}else if(ball >= 130 && ball <= 180){
    alert("siz grant asosida qabul qilindingiz ")
}




//1
var num = +prompt("ENter the number: ")
if(num > 0){
    alert(num+" son musbat")
 
}else{
    alert(num + "son toq ")
}

//2

var num = +prompt("ENter the number: ")
if(num <0){
    alert(num + "son toq ")

}else{
    alert(num+" son musbat")
}


//3
var num = +prompt("ENter the number: ")
if(num % 2 == 0){
    alert(num + "soni juft ")

}else{
    alert(num+" soni juft emas")
}


//4
var num1= +prompt("ENter the first number: ")

var num2 = +prompt("ENter the second number: ")

if(num1 > 2 && num2 <= 3){
    alert("togri");
}else{
    alert("notogri");
};


//5
var num1= +prompt("ENter the first number: ")

var num2 = +prompt("ENter the second number: ")

if(num1 >= 2 || num2 < -2){
    alert("togri");
}else{
    alert("notogri");
};



//6
var a= +prompt("ENter the first number: ")
var b= +prompt("ENter the second number: ")
var c = +prompt("ENter the third number: ")

if(a <= b <= c ){
    alert("togri");
}else{
    alert("notogri");
};


//7

//8
var a= +prompt("ENter the first number: ")
var b= +prompt("ENter the second number: ")


if(a % 2 == 0 && b % 2 == 0){
    alert( a +" va " + b +"toq sonlar");
}else{
    alert("sonlardan biri tog emas");
};


//9

//10

//11

//12

//13

//14

//15

//16