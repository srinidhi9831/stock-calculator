var initialPrice=document.querySelector("#price");
var quantity=document.querySelector("#quantity");
var currentPrice=document.querySelector("#currentPrice");
var output=document.querySelector("#output");
var button = document.querySelector("#button");
var body = document.querySelector(".container");
//console.log(button);
//console.log(initialPrice);

button.addEventListener("click",eventHandler);

function eventHandler(){
  
   if(validate(initialPrice,quantity,currentPrice))
      calculateProfitAndLoss(initialPrice,quantity,currentPrice);
          
}



function calculateProfitAndLoss(initialPrice,quantity,currentPrice){
   var costPrice= (initialPrice.value)*(quantity.value);
   var sellingPrice=(currentPrice.value)*(quantity.value);
   if(sellingPrice>costPrice){
   var profit=getProfit(costPrice,sellingPrice);
   var profitPercentage= (getProfitPercentage(profit,costPrice));
   show(`profit is ${profit}, profitpercent is ${profitPercentage}%`);
   body.style.backgroundColor="green";
   }
   else if(costPrice>sellingPrice){
   var loss=getLoss(costPrice,sellingPrice);
   var lossPercentage=getLossPercentage(loss,costPrice);
   show(`loss is ${loss}, losspercentage is ${lossPercentage}%`);
   body.style.backgroundColor="red";
   }
   else{
    show(`no loss no profit`);
   }

}


function getProfit(costPrice,sellingPrice){
     return (sellingPrice-costPrice)
}

function getLoss(costPrice,sellingPrice){
    return (costPrice-sellingPrice);
}

function getProfitPercentage(profit,costPrice){
     return ((profit/costPrice)*100).toFixed(2);
}

function getLossPercentage(loss,costPrice){
    return ((loss/costPrice)*100).toFixed(2);
}

function show(message){
    output.innerText=`${message}`;
    console.log(message);
}
  
function validate(initialPrice,quantity,currentPrice){

    if(initialPrice.value==="" || quantity.value==="" || currentPrice.value===""){
            alert("please fill out all fields");
            return false;
    }
    else if(isNaN(initialPrice.value) || isNaN(quantity.value) || isNaN(currentPrice.value)){
        console.log(`inside val ${isNaN(initialPrice)}`);
         show("please enter number only");
         return false;
        
     }
     else if(initialPrice.value<0 || quantity.value<0 || currentPrice.value<0 ){
        alert("please enter numbers greater than zero");
        return false;
}
     else
       console.log("validate sucess");
       return true;    
}