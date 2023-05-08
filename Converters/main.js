const tempConv = (id, value) => {
    const val = parseFloat(value);

    const celsius = document.querySelector("#cel");
    const fahrenheit = document.querySelector("#fah");
    const kelvin = document.querySelector("#kel");

    if (id === 'cel') {
        fahrenheit.value = ((val * 1.8) + 32).toFixed(2);
        kelvin.value = (val + 273.15).toFixed(2)
    }
    if (id === 'fah') {
        celsius.value = ((val - 32) / 1.8).toFixed(2);
        kelvin.value = (((val - 32) / 1.8) + 273.15).toFixed(2);
    }
    if (id === 'kel') {
        celsius.value = (val -273.15).toFixed(2);
        fahrenheit.value = ((val - 273.15)*1.8 + 32).toFixed(2)
    }
}


const disConv = (id, value) => {
    let val = parseFloat(value);

    const kilometre = document.querySelector("#km");
    const miles = document.querySelector("#ml");
    const nauticalmiles = document.querySelector("#nm");

    if (id === 'km') {
        miles.value = (val * 0.62).toFixed(2);
        nauticalmiles.value = (val * 0.54).toFixed(2);
    }
    if (id === 'ml') {
        kilometre.value = (val * 1.61).toFixed(2);
        nauticalmiles.value = (val * 0.87).toFixed(2);
    }
    if (id === 'nm') {
        kilometre.value = (val * 1.85).toFixed(2);
        miles.value = (val * 1.15).toFixed(2)
    }
}

