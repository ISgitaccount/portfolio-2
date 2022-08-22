'use strict';

const firstValue = document.querySelector('select.firstvalue');
const secondValue = document.querySelector('select.secondvalue');
const to = document.querySelector('button.to');
const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');

const input = document.querySelector('.volume');
const convert = document.querySelector('.convert');


async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    
    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR; 
    
    console.log(rates);
    
    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
}

getCurrencies();

setInterval(getCurrencies, 30000);


input.oninput = convertValue;

secondValue.oninput = convertValue;

function convertValue() {
    const result = document.querySelector('.volume2');
    result.value = (parseFloat(input.value) / rates[secondValue.value].Value).toFixed(2);
}

