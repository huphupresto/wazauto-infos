// Moroccan Vignette Tax Calculator

function calculateVignetteTax(fuelType, fiscalHorsepower) {
    let tax = 0;

    // Define tax rates based on fuel type
    const taxRates = {
        "gasoline": 0.5,
        "diesel": 0.3
    };

    // Retrieve the tax rate for the specified fuel type
    const rate = taxRates[fuelType.toLowerCase()];

    if (rate) {
        // Calculate the tax based on fiscal horsepower
        tax = fiscalHorsepower * rate;
    } else {
        throw new Error("Invalid fuel type. Please use 'gasoline' or 'diesel'.");
    }

    return tax;
}

// Example usage:
// const vignetteTax = calculateVignetteTax('gasoline', 10);
// console.log(`Vignette Tax: ${vignetteTax}`);
