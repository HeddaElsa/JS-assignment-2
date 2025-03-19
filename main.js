let input = prompt("Enter a price tag please (for example $49,99)");

positionDollarsign = input.indexOf("$");

input = input.slice(positionDollarsign + 1);

input = parseInt(input);

input = input * 0.9;

console.log(`Your new price is $${input}`);