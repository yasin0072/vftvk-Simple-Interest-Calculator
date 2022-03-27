function compute()
{
    amount = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    
    if (amount == "" || amount <= 0) {
        alert("Amount is not correct");
        document.getElementById("principal").focus();
        return false;
    }
     if (rate <= 0) {
        alert("rate is not correct");
        document.getElementById("rate").focus();
        return false;
    }
    var fullYear = new Date().getFullYear(); 
    var future= parseInt(fullYear,10) + parseInt(years,10);
    var interest= amount * years * rate / 100;
    var calculation= "If you deposit <span>" + amount + "</span>,<br>at an interest rate of <span>" + rate + "</span> %.<br>You will receive an amount of <span>" + interest + ",</span><br>in the year <span>" + future + "</span>";
    document.getElementById("calculation").innerHTML=calculation;
    
   

}
        