document.getElementById("kira").addEventListener("click", function() {
  console.log('test')
  var principal = document.getElementById("principal").value;
  var deposit = document.getElementById("deposit").value;
  var interest = document.getElementById("interest").value;
  var years = document.getElementById("years").value;

  let totalPrinciple = principal-deposit;
  let totalInterest = (interest/100)*totalPrinciple*years;
  let totalToPay = totalInterest+totalPrinciple;
  let monthlyTopay = totalToPay/years/12;

  document.getElementById("solution").innerHTML = "Monthly payment = " + monthlyTopay})
