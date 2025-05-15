// JavaScript for Checkout page functionality

// Function to handle form submission
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var form = event.target;
    
    // Perform additional validation if needed
    
    // Proceed with checkout (redirect to confirmation page, etc.)
    // For demo purposes, log the form data
    var formData = {
      name: form.elements['name'].value,
      surname: form.elements['surname'].value,
      email: form.elements['email'].value,
      phonenumber: form.elements['phonenumber'].value
    };
    console.log('Shipping Information:', formData);

    // Scroll to the beginning of the credit card form
    document.getElementById('credit-card-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    
  });

// Function to handle form submission for credit card information
document.getElementById('credit-card-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var form = event.target;
  
  
  
  // Proceed with handling credit card information
  // For demo purposes, log the form data
  var creditCardData = {
    cardNumber: form.elements['card-number'].value,
    name: form.elements['card-name'].value,
    expiryDate: form.elements['expiry-date'].value,
    cvv: form.elements['cvv'].value
  };
  console.log('Credit Card Information:', creditCardData);
  
  // Scroll to the beginning of the address info form
  document.getElementById('address-form').scrollIntoView({ behavior: 'smooth', block: 'start' });

});

// Function to handle form submission for Address information
document.getElementById('address-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var form = event.target;
  
  
  
  // Proceed with handling address info
  // For demo purposes, log the form data
  var addressData = {
    line1: form.elements['line1'].value,
    line2: form.elements['line2'].value,
    line3: form.elements['line3'].value,
    town: form.elements['town'].value,
    postal: form.elements['postal'].value,
    country: form.elements['country'].value,
  };
  console.log('Adress Information:', addressData);
  
  // Reset all forms and show confirmation message
  document.getElementById('checkout-form').reset();
  document.getElementById('credit-card-form').reset();
  form.reset();
  alert('Your order has been placed successfully!');

  // Scroll to the beginning of the checkout form
  document.getElementById('checkOut').scrollIntoView({ behavior: 'smooth', block: 'start' });

});

// Retrieve order summary from local storage and display it in the order summary section

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve order summary from local storage
  const orderSummary = JSON.parse(localStorage.getItem('orderSummary'));

  const totalPrice = localStorage.getItem('totalPrice');

  // Display order summary in the order summary section
  const orderSummaryElement = document.querySelector('.order-summary');

  if (orderSummary) {
      // Construct HTML for order summary
      let orderSummaryHTML = '<h2>Order Summary</h2>';

      orderSummary.forEach(item => {
          // Add null check for each item
          if (item && item.name && item.price && item.quantity) {
              orderSummaryHTML += `
                  <div>
                      <span>${item.name}</span>
                      <span>$${item.price.toLocaleString()}</span>
                      <span>Quantity: ${item.quantity}</span>
                  </div>`;
          }
      });
      console.log('Order Summary -' + orderSummary);
      // Display order summary HTML
      orderSummaryHTML += `<p class="total-price">Total: $${totalPrice ? totalPrice.toLocaleString() : 0}</p>`;
      orderSummaryElement.innerHTML = orderSummaryHTML;
  } else {
      orderSummaryElement.innerHTML = '<p>No items in the cart.</p>';
  }
});

// Add an event listener to execute when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Remove order summary from local storage
  localStorage.removeItem('orderSummary');
});



  