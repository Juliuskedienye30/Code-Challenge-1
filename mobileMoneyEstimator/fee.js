// Function to estimate the transaction fee based on amount sent
function estimateTransactionFee(amountToSend) {
  // Check for valid number input
  if (typeof amountToSend !== 'number' || amountToSend <= 0 || isNaN(amountToSend)) {
    console.log('Please enter a valid positive amount.');
    return;
  }

  const feeRate = 0.015;  // 1.5% transaction fee
  const minFee = 10;      // Minimum fee (KES)
  const maxFee = 70;      // Maximum fee (KES)

  // Calculate the fee before applying min/max limits
  let calculatedFee = amountToSend * feeRate;

  // Apply minimum fee if calculated fee is too low
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  }
  // Apply maximum fee if calculated fee is too high
  else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  // Calculate total amount to be debited
  const totalAmount = amountToSend + calculatedFee;

  // Display the fee and total amount
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}\n`);
  console.log('Send Money Securely!');
}

// Prompt user to enter amount
const userInput = prompt('Unatuma Ngapi? (KES):');
const amount = Number(userInput); // Convert input to number
estimateTransactionFee(amount);   // Call the fee estimator
