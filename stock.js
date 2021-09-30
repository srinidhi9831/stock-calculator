function getStock(){
    var price=parseInt(document.getElementById("price").value);
    var quantity=parseInt(document.getElementById("quantity").value);
    var currentPrice=parseInt(document.getElementById("currentPrice").value);
    var total = price*quantity;
    var currentTotal= currentPrice*quantity;
    var percent;
    if(currentTotal>total){
        percent = ((currentTotal-total)/total)*100
        document.getElementById("output").innerText="Yay PROFIT\n" + percent+"% up";
      }
    else{
        percent=((total-currentTotal)/total)*100;
        document.getElementById("output").innerText="opps!! its loss\n" + percent+"% down";
    }

   

}