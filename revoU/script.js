document.getElementById('convertBTN').addEventListener('click', function () {
    const celcius = parseFloat(document.getElementById('inputCelcius').value);
    if (!isNaN(celcius)) {
        const fahrenheit = (celcius * 9 / 5) + 32;
        document.getElementById('inputFahrenheit').value = fahrenheit.toFixed(2);
        document.querySelector('.container-result').value = `${celcius}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert("Please enter a valid number for Celcius :)");
    }
});

document.getElementById('reverseBTN').addEventListener('click', function () {
    const fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celcius = (fahrenheit - 32) / 1.8;
        document.getElementById('inputCelcius').value = celcius.toFixed(2);
        document.querySelector('.container-result').value = `${fahrenheit}°F - 32 / 1.8 = ${celcius.toFixed(2)}°C`;
    } else {
        alert("Please enter a valid number for Fahrenheit :(");
    }
});

document.getElementById('resetBTN').addEventListener('click', function () {
    document.getElementById('inputCelcius').value = '';
    document.getElementById('inputFahrenheit').value = '';
    document.querySelector('.container-result').value = '';
});