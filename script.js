document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname; // Get current page URL

  
  var donationButton = document.getElementById('donationButton');
  var historyButton = document.getElementById('historyButton');

   
  if (currentPage.includes('index.html')) {
    donationButton.classList.add('bg-lime-400', 'text-white');
    donationButton.classList.remove('bg-white', 'text-black');
    historyButton.classList.add('bg-white', 'text-black');
    historyButton.classList.remove('bg-lime-400', 'text-white');
  } else if (currentPage.includes('history.html')) {
    historyButton.classList.add('bg-lime-400', 'text-white');
    historyButton.classList.remove('bg-white', 'text-black');
    donationButton.classList.add('bg-white', 'text-black');
    donationButton.classList.remove('bg-lime-400', 'text-white');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const donationButtons = document.querySelectorAll(".donateBtn");
  const donationInputs = document.querySelectorAll(".donationInput");
  const increaseSpans = document.querySelectorAll(".increase");
  const decreaseEl = document.getElementById("decrease"); // Remaining balance

  donationButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const donationAmount = parseInt(donationInputs[index].value);

       
      if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
      }

      
      let currentDecrease = parseInt(decreaseEl.textContent);

       
      if (donationAmount > currentDecrease) {
        alert("Error: Donation amount exceeds available balance.");
        return; // Stop execution if the donation amount is too high
      }

       
      let currentIncrease = parseInt(increaseSpans[index].textContent);
      increaseSpans[index].textContent = currentIncrease + donationAmount;

       
      decreaseEl.textContent = currentDecrease - donationAmount;

       
      addToHistory(donationAmount);
    });
  });
});

function addToHistory(donationAmount) {
   
  let donationHistory = JSON.parse(localStorage.getItem("donationHistory")) || [];
  donationHistory.push({
    date: new Date().toLocaleString(),
    amount: donationAmount
  });
  localStorage.setItem("donationHistory", JSON.stringify(donationHistory));
}

