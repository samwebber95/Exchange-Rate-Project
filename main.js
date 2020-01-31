let mainTitle = document.createElement("h1");
document.body.appendChild(mainTitle);
mainTitle.innerText = "Bank of Webber & Kaufman";
mainTitle.classList.add("typewriter1");

let introPara = document.createElement("p");
document.body.appendChild(introPara);
introPara.innerText =
  "Welcome to the Bank of Webber & Kaufman. You can convert your Dollars into Pounds, and vice versa, with us. Please indulge in our currency converter below.";
introPara.classList.add("typewriter");

const liveGBPDisplay = document.querySelector("#live-gbp-rate");
const liveUSDDisplay = document.querySelector("#live-usd-rate");

function getRateDollarsToPounds() {
  let rate = fetch("https://api.exchangerate-api.com/v4/latest/USD", {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("$to£", data.rates.GBP);
      liveGBPDisplay.innerText = data.rates.GBP;
    });
}
const liveGBPDisplay = document.querySelector;

function getRateDollarsToPounds() {
  let rate = fetch("https://api.exchangerate-api.com/v4/latest/USD", {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("$to£", data.rates.GBP);
      return rateDollarsToPounds;
    });
}

function getRatePoundsToDollars() {
  let rate = fetch("https://api.exchangerate-api.com/v4/latest/GBP", {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("£to$", data.rates.USD);
      return ratePoundsToDollars;
    });
}

getRateDollarsToPounds();
getRatePoundsToDollars();

function getRatePoundsToDollars() {
  let rate = fetch("https://api.exchangerate-api.com/v4/latest/GBP", {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("£to$", data.rates.USD);
      liveUSDDisplay.innertext = data.rates.GBP;
    });
}

getRateDollarsToPounds();
getRatePoundsToDollars();
