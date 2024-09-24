window.onload = function () {
  const historyList = document.getElementById("historyList");
  let donationHistory = JSON.parse(localStorage.getItem("donationHistory")) || [];

  donationHistory.forEach((donation) => {
    let donationItem = document.createElement("div");
    donationItem.classList.add("border", "border-gray-300","lg:w-full", "p-4", "rounded-lg");
    donationItem.innerHTML = `<p>Date: ${donation.date}</p><p>Amount: ${donation.amount} BDT</p>`;
    historyList.appendChild(donationItem);
  });
};
