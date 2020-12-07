const colors = [
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "brown",
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "brown",
];

var random_num = [];

while (random_num.length < 16) {
  random_number = Math.floor(Math.random() * 16);
  if (!random_num.includes(random_number)) {
    random_num.push(random_number);
  }
  console.log(random_num);
}
console.log("this is " + random_num.length);

var current = "";

console.log(document.getElementsByClassName("box").length);



document.getElementById("1").onclick = function () {
  if (current===""){
    document.getElementById("1").style.backgroundColor = colors[random_num[0]];
    current = colors[random_num[0]];
  }
  else if(current===colors[random_num[0]]){
    document.getElementById("1").style.backgroundColor = colors[random_num[0]];
    current = "";
  }
  else {
    current = "";
    for (var k=0;k<16;k++){
      document.getElementsByClassName("box")[k].style.backgroundColor = "black";
    }
  }
  console.log(current);
};

document.getElementById("2").onclick = function () {
  if (current===""){
    document.getElementById("2").style.backgroundColor = colors[random_num[1]];
    current = colors[random_num[1]];
  }
  else if(current===colors[random_num[1]]){
    document.getElementById("2").style.backgroundColor = colors[random_num[1]];
    current = "";
  }
  else {
    current = "";
    for (var k=0;k<16;k++){
      document.getElementsByClassName("box")[k].style.backgroundColor = "black";
    }
  }
  console.log(current);
};

document.getElementById("3").onclick = function () {
  if (current===""){
    document.getElementById("3").style.backgroundColor = colors[random_num[2]];
    current = colors[random_num[2]];
  }
  else if(current===colors[random_num[2]]){
    document.getElementById("3").style.backgroundColor = colors[random_num[2]];
    current = "";
  }
  else {
    current = "";
    for (var k=0;k<16;k++){
      document.getElementsByClassName("box")[k].style.backgroundColor = "black";
    }

  }
  console.log(current);
};


document.getElementById("4").onclick = function () {   if (current===""){     document.getElementById("4").style.backgroundColor = colors[random_num[3]];     current = colors[random_num[3]];   }   else if(current===colors[random_num[3]]){     document.getElementById("4").style.backgroundColor = colors[random_num[3]];     current = "";   }   else {    current = ""; for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("5").onclick = function () {   if (current===""){     document.getElementById("5").style.backgroundColor = colors[random_num[4]];     current = colors[random_num[4]];   }   else if(current===colors[random_num[4]]){     document.getElementById("5").style.backgroundColor = colors[random_num[4]];     current = "";   }   else {   current = "";  for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("6").onclick = function () {   if (current===""){     document.getElementById("6").style.backgroundColor = colors[random_num[5]];     current = colors[random_num[5]];   }   else if(current===colors[random_num[5]]){     document.getElementById("6").style.backgroundColor = colors[random_num[5]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("7").onclick = function () {   if (current===""){     document.getElementById("7").style.backgroundColor = colors[random_num[6]];     current = colors[random_num[6]];   }   else if(current===colors[random_num[6]]){     document.getElementById("7").style.backgroundColor = colors[random_num[6]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("8").onclick = function () {   if (current===""){     document.getElementById("8").style.backgroundColor = colors[random_num[7]];     current = colors[random_num[7]];   }   else if(current===colors[random_num[7]]){     document.getElementById("8").style.backgroundColor = colors[random_num[7]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("9").onclick = function () {   if (current===""){     document.getElementById("9").style.backgroundColor = colors[random_num[8]];     current = colors[random_num[8]];   }   else if(current===colors[random_num[8]]){     document.getElementById("9").style.backgroundColor = colors[random_num[8]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("10").onclick = function () {   if (current===""){     document.getElementById("10").style.backgroundColor = colors[random_num[9]];     current = colors[random_num[9]];   }   else if(current===colors[random_num[9]]){     document.getElementById("10").style.backgroundColor = colors[random_num[9]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("11").onclick = function () {   if (current===""){     document.getElementById("11").style.backgroundColor = colors[random_num[10]];     current = colors[random_num[10]];   }   else if(current===colors[random_num[10]]){     document.getElementById("11").style.backgroundColor = colors[random_num[10]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("12").onclick = function () {   if (current===""){     document.getElementById("12").style.backgroundColor = colors[random_num[11]];     current = colors[random_num[11]];   }   else if(current===colors[random_num[11]]){     document.getElementById("12").style.backgroundColor = colors[random_num[11]];     current = "";   }   else { current = "";    for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("13").onclick = function () {   if (current===""){     document.getElementById("13").style.backgroundColor = colors[random_num[12]];     current = colors[random_num[12]];   }   else if(current===colors[random_num[12]]){     document.getElementById("13").style.backgroundColor = colors[random_num[12]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("14").onclick = function () {   if (current===""){     document.getElementById("14").style.backgroundColor = colors[random_num[13]];     current = colors[random_num[13]];   }   else if(current===colors[random_num[13]]){     document.getElementById("14").style.backgroundColor = colors[random_num[13]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);}; document.getElementById("15").onclick = function () {   if (current===""){     document.getElementById("15").style.backgroundColor = colors[random_num[14]];     current = colors[random_num[14]];   }   else if(current===colors[random_num[14]]){     document.getElementById("15").style.backgroundColor = colors[random_num[14]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);};
document.getElementById("16").onclick = function () {   if (current===""){     document.getElementById("16").style.backgroundColor = colors[random_num[15]];     current = colors[random_num[15]];   }   else if(current===colors[random_num[15]]){     document.getElementById("16").style.backgroundColor = colors[random_num[15]];     current = "";   }   else {  current = "";   for (var k=0;k<16;k++){       document.getElementsByClassName("box")[k].style.backgroundColor = "black";     }   } console.log(current);};
