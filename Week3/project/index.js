
const modalClass = document.querySelector('.modal');
const result = document.getElementById('result');

//Calculate Tip
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("peopleamt").value;

  //validate input fields If any of the input fields are empty when the button is clicked, call an alert 
  try {
    if (billAmt == "") throw "Fill in the bill amount fields !!!";
    if (isNaN(billAmt)) throw "Please input any number for bill amount !!!";
    billAmt = Number(billAmt);
    if (billAmt <= 0) throw "Input a number greater then 0 for the bill amount !!!";

    if (serviceQual == 0) throw "Choose an option in the service quality fields !!!";
    serviceQual = Number(serviceQual);

    if (numOfPeople == "") throw "Fill in the people fields !!!";
    if (isNaN(numOfPeople)) throw "Please input any number for number of people !!!";
    numOfPeople = Number(numOfPeople);
    if (numOfPeople <= 0) throw "Input a number greater then 0 for the number of people!!!";
    if (Math.floor(numOfPeople) !== numOfPeople) throw "Input an integer number for the number of people!!!";


    //Calculate tip
    const total = ((billAmt * serviceQual) / numOfPeople).toFixed(2);

    // If there's only 1 person who shares the bill, output only the tip amount (omit the "each")
    (numOfPeople === 1) ? document.getElementById("each").style.display = "none" : document.getElementById("each").style.display = "block";

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

  }
  catch (errorMessage) {
    modalClass.style.display = 'block';
    result.innerHTML = `
    <h2>Information</h2>
    <hr>
    <p>${errorMessage}</p>
  `;
    setTimeout(function () { modalClass.style.display = 'none'; }, 3000);
  }
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function with an Event listener
document.getElementById("calculate").addEventListener('click', function () {
  calculateTip()
});
