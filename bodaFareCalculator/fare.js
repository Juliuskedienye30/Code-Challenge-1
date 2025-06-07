// Function to calculate boda boda fare based on distance
function calculateBodaFare(distanceInKm) {
  // Check if input is valid
  if (typeof distanceInKm !== 'number' || distanceInKm <= 0 || isNaN(distanceInKm)) {
    console.log('Please enter a valid distance in kilometers.');
    return;
  }

  const baseFare = 50;         // Fixed fare in KES
  const chargePerKm = 15;      // Charge per kilometer

  // Calculate additional cost and total fare
  const distanceFare = chargePerKm * distanceInKm;
  const totalFare = baseFare + distanceFare;

  // Display the fare breakdown
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log('\nPanda Pikipiki!');
}

// Prompt user to enter distance
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(userInput); // Convert to number
calculateBodaFare(distance); // Call the fare estimator
