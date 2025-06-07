// Function to calculate ingredients needed for the given number of chai cups
function calculateChaiIngredients(numberOfCups) {
  // Check if input is a valid number
  if (typeof numberOfCups !== 'number' || numberOfCups <= 0 || isNaN(numberOfCups)) {
    console.log('Please enter a valid number of cups.');
    return;
  }

  // Define ingredient amounts per cup
  const waterPerCup = 200;   // in ml
  const milkPerCup = 50;     // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2;     // in teaspoons

  // Calculate total amounts needed
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Print the results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log('\nEnjoy your Chai Bora!');
}

// Prompt the user for number of cups
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = Number(userInput); // Convert string to number
calculateChaiIngredients(cups); // Call function with user input
