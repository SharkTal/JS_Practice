// 05.01 Sum of Two Numbers

var number1 = 3,
    number2 = 4,
    sum = number1 + number2;

    console.log(sum);

    // 05.02 Product of Three Numbers
//     Can you use JavaScript to compute the product of three numbers and write the product (kertolaskun tulo) into the browser console?

// Define the following four variables: first, second, third, product. Assign 5 to first. Assign 7 to second. Assign 10 to third. After that, compute the product of the values of these three variables and assign the result to the variable product. Finally, write the value of the variable product into the browser console.

var first = 5,
    second = 7,
    third = 10;
var  product = first + second + third;

    console.log(product);

    // 05.03 Decimal Division

    var a = 4.87,
        b = 5.03,
        quotient = a /b;
    console.log(quotient);

    // 05.04 String Concatenation
// 05.05 Addition Assignment

var fullText = "aaa";
    fullText += "bbb";
    fullText += "ccc";

    console.log(fullText);

// 05.06 Unit Fine

var netIncome ;
var unitFine ;

function unitFineCalculator( netIncome) {
    unitFine = (netIncome - 255) / 60;
    return unitFine.toFixed(2);
}

console.log(unitFineCalculator(4000));


// 05.09 Summer Cottage

var rent,
    participants,
    rentPerPerson;

    function calculateRent(rent, participants){
      return  rentPerPerson = (rent / participants).toFixed(2);
    }

    console.log(calculateRent(460, 5));

//     
// 05.10 Car Share

var kilometers,
    fuleConsumptionPerHundred ,
    fulePricePerLitre ,
    participants,
    costPerPerson;

function calculateCost(kilometers, fuleConsumptionPerHundred, fulePricePerLitre, participants) {
    return costPerPerson = (kilometers /100 * fuleConsumptionPerHundred * fulePricePerLitre / participants).toFixed(2);
}
console.log("Fuel costs per participant is "+ calculateCost(700, 5.1, 1.339 , 5) + " euros");


