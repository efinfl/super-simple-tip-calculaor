
// click listener on button to call calculate function
document.getElementById("calculate").addEventListener("click", calculate);

function calculate () {
    // Adds the dollar sign
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });

    // gets bill amount from input
    const billAmount = document.getElementById("bill-amount").value;
    
    // gets percentage from input
    const percentage = document.getElementById("percentage").value;
    
    // converts percentage to a decimal
    const decimal = percentage/100;
    
    // calculates tip
    const tipAmount = billAmount * decimal;

    // adds tip to the bill amount for total
    const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount)

    // displays tip amount and total to the dom
    document.getElementById("tip-amount").innerHTML = formatter.format(tipAmount.toFixed(2))
    document.getElementById("total-amount").innerHTML = formatter.format(totalAmount.toFixed(2))


}






