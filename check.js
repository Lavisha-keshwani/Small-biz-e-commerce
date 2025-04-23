function placeOrder() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }
    alert("Your order has been placed using " + selectedPayment.value.toUpperCase() + "!");
  }
  