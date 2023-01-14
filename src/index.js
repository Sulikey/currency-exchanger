/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerService from './currency-service-logic';

async function getRates(currencyEntered, currencyNeeded, currencyAmount) {
  const response = await CurrencyExchangerService.getRates(currencyEntered, currencyNeeded, currencyAmount);
  if (response.conversion_result) {
    printElements(response, currencyNeeded);
  } else {
    printError(response, currencyEntered);
  }
}

//UI LOGIC
function printElements(response, currencyNeeded) {
  let exchangeResult = response.conversion_result;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Money entered from US dollar to ${currencyNeeded} is ${exchangeResult}`;
}
