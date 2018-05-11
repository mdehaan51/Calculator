//function to enter numbers and math characters into display
function buttonClick(val){
  document.getElementById("display").innerHTML += val;
};

//function for CE button that deletes most recent character
function clearButton(){
  var val = document.getElementById("display").innerHTML;
  val = val.substring(0,val.length-1);
document.getElementById("display").innerHTML = val;  }

//function for AC (ALL CLEAR) button, deletes all
function allClear(){
  document.getElementById("display").innerHTML = "";
  document.getElementById("savedData").innerHTML = "";
}
//Perform the calculation
function doMath(){
 var mathVal = document.getElementById("display").innerHTML;
;
  var mathArr = mathVal.split("");
  for(var i = 0; i <= mathArr.length-1; i++){
  mathArr[i]=mathArr[i].replace('^',"**");
  mathArr[i]=mathArr[i].replace('x',"*");
  }
  mathVal = mathArr.join('');
  var savedCalc = eval(mathVal);
    console.log(savedCalc);
    /*if (savedCalc == undefined){
      document.getElementById("display").innerHTML = "ERROR"
    } else {*/
  document.getElementById("display").innerHTML = savedCalc;
  document.getElementById("savedData").innerHTML = savedCalc;
}