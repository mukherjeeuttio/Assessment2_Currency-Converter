const exchangeRates = {
    USD: { EUR: 0.92637, GBP: 0.79299, JPY: 150.124, AUD: 1.52736, CAD: 1.35074, INR: 82.9392 },
    EUR: { USD: 1.07933, GBP: 0.85595, JPY: 162.045, AUD: 1.64867, CAD: 1.45789, INR: 89.5185 },
    GBP: { USD: 1.26087, EUR: 1.1681, JPY: 189.295, AUD: 1.9258, CAD: 1.7031, INR: 104.575 },
    JPY: { USD: 0.00666, EUR: 0.00617, GBP: 0.00528, AUD: 0.01017, CAD: 0.009, INR: 0.55241 },
    AUD: { USD: 0.6546, EUR: 0.60646, GBP: 0.51909, JPY: 98.2775, CAD: 0.8842, INR: 54.2922 },
    CAD: { USD: 0.74023, EUR: 0.68573, GBP: 0.587, JPY: 111.127, AUD: 1.1306, INR: 61.3944 },
    INR: { USD: 0.01206, EUR: 0.01117, GBP: 0.00956, JPY: 1.80996, AUD: 0.01841, CAD: 0.01629 }
  };
  
  function convert() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    if (isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }
  
    if (fromCurrency === toCurrency) {
      document.getElementById('result').innerText = amount.toFixed(2) + ' ' + toCurrency;
      return;
    }
  
    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
      alert('Conversion not available for selected currencies.');
      return;
    }
  
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = convertedAmount.toFixed(2) + ' ' + toCurrency;
  }
  