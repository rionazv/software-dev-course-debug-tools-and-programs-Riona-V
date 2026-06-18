const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // CHANGED <= TO <
      total += cartItems[i].price;
  }
  return total;
}

function applyDiscount(total, discountRate) {

  if (discountRate < 0 || discountRate > 1) {
    return total;
  } else {
      return total - total * discountRate;
  } // ADDED A SMALL CHECK TO MAKE SURE DISCOUNTRATE IS WITHIN AN ACCEPTABLE RANGE
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });

  // ADDED "AFTER DISCOUNT" TO CLARIFY THIS PRICE
  receipt += `Total after disount: $${total.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${total}`; // CHANGED TO TOTAL TO SHOW CUSTOMER REAL VALUE
document.getElementById("receipt").textContent = receipt;

/*
The main error in the program was a faulty loop that ran longer than
the length of the cart. Once that was fixed, the program ran smoothly.
I also added a quick check to make sure a valid discount rate is applied.
If we pass in an invalid rate, then we do not apply any discount.
The browser tools are helpful to validate that variables hold the right value and type.
I got to set breakpoints within functions and mouseover variables to see their current value.
*/