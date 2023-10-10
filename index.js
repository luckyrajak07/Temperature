function convertTemperature() {
    
    const inputTemperature = parseFloat(document.getElementById("numberInput").value);
    const inputUnit = document.getElementById("temperature").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let result;

    if (inputUnit === "celcius") 
    {
        if (outputUnit === "Fahrenheit") 
        {
            result = (inputTemperature * 9/5) + 32;
        } 
        else if (outputUnit === "Kelvin")
        {
            result = inputTemperature + 273.15;
        } 
        else 
        {
            result = inputTemperature;
        }
    } 
    else if (inputUnit === "Fahrenheit") 
    {
        if (outputUnit === "celcius") 
        {
            result = (inputTemperature - 32) * 5/9;
        } 
        else if (outputUnit === "Kelvin") 
        {
            result = (inputTemperature - 32) * 5/9 + 273.15;
        } 
        else 
        {
            result = inputTemperature;
        }
    }
     else if (inputUnit === "Kelvin") 
     {
        if (outputUnit === "celcius") 
        {
            result = inputTemperature - 273.15;
        } 
        else if (outputUnit === "Fahrenheit") 
        {
            result = (inputTemperature - 273.15) * 9/5 + 32;
        } 
        else 
        {
            result = inputTemperature;
        }
    }

    
    document.querySelector(".result").textContent = `Result: ${result.toFixed(2)} ${outputUnit}`;
}


document.querySelector(".btn").addEventListener("click", convertTemperature);