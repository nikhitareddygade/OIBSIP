function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDiv = document.getElementById('result');

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9 / 5) + 32;
        resultDiv.textContent = `${temperature}°C is converted to ${fahrenheit}°F`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5 / 9;
        resultDiv.textContent = `${temperature}°F is converted to ${celsius} °C`;
    }
}