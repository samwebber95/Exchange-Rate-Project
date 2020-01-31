const liveGBPDisplay = document.querySelector('#live-gbp-rate');
const liveUSDDisplay = document.querySelector('#live-usd-rate');

function getRateDollarsToPounds() {
  let rate = fetch('https://api.exchangerate-api.com/v4/latest/USD', {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('$to£', data.rates.GBP);
      liveGBPDisplay.innerText = data.rates.GBP;
    });
}
const liveGBPDisplay = document.querySelector;

function getRateDollarsToPounds() {
  let rate = fetch('https://api.exchangerate-api.com/v4/latest/USD', {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('$to£', data.rates.GBP);
      return rateDollarsToPounds;
    });
}

function getRatePoundsToDollars() {
  let rate = fetch('https://api.exchangerate-api.com/v4/latest/GBP', {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('£to$', data.rates.USD);
      return ratePoundsToDollars;
    });
}

getRateDollarsToPounds();
getRatePoundsToDollars();

function getRatePoundsToDollars() {
  let rate = fetch('https://api.exchangerate-api.com/v4/latest/GBP', {})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('£to$', data.rates.USD);
      liveUSDDisplay.innertext = data.rates.GBP;
    });
}

getRateDollarsToPounds();
getRatePoundsToDollars();
