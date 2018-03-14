$(function(){
  checkValue();
  setInterval(checkValue, 10000);
  
  function checkValue(){
    $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json")
    .done(function(data){
      $(".priceEUR").text(data.bpi.EUR.rate);
      $(".priceUSD").text(data.bpi.USD.rate);
    })
    .fail(function(){
      console.log("something went wrong!");
    });
  }
});