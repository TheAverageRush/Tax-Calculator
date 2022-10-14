let salaryElement = document.getElementById("salary");
let zakatElement = document.getElementById("zakat");
let educationElement = document.getElementById("education");
let profitOnDebtElement = document.getElementById("profit-on-debt");
let durationElement = document.getElementById("duration");
let taxLiabilityElement = document.getElementById("tax-liability");

const button = document.getElementById("calculate-button")
button.addEventListener("click", getValueInEnterInput)

function getValueInEnterInput() {
  let salary = Number(salaryElement.value);
  if (durationElement.value === "Duration"){
    salary = salary * 0;
  }
  
  if(durationElement.value === "Monthly") {
    salary = salary * 12;
  }

  if(durationElement.value === "Anually") {
    salary = salary * 1;
  }


  let tax = 0;

  if (salary > 600_000 && salary <= 1_200_000) {
    tax = (salary-600_000) * 0.025;
  }

  if (salary > 1_200_000 && salary <= 2_400_000) {
    tax = 15000 + ((salary - 1_200_000) * 0.125)
  }

  if (salary > 2_400_000 && salary < 3_600_000) {
    tax = 165_000 + ((salary - 2_400_000) * 0.20)
  }

  if (salary > 3_600_000 && salary <= 6_000_000) {
    tax = 405_000 + ((salary - 3_600_000) * 0.25)
  }

  if (salary > 6_000_000 && salary <= 12_000_000) {
    tax = 1_005_000 + ((salary - 6_000_000) * 0.325)
  }

  if (salary > 12_000_000) {
    tax = 2_955_000 + ((salary - 12_000_000) * 0.35)
  }

  let zakat = Number(zakatElement.value) * 0.025
  let education = Number(educationElement.value) * 0.025
  let profitOnDebt = Number(profitOnDebtElement.value) * 0.025

  tax = tax - (zakat + education + profitOnDebt)
  taxLiabilityElement.innerHTML = "Your tax liability is " + tax;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

