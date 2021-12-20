document.addEventListener('DOMContentLoaded', function() {
  // get all buttons
  var buttons = document.querySelectorAll('button');
  // attach clickAddEventListener to all buttons
  buttons.forEach(function(button) {
    button.addEventListener('click', clickAddProduct);
  });
});

let sum = 0;

function clickAddProduct(event) {
  let price = event.target.getAttribute('data-value');
  sum += parseInt(price);
  document.getElementById('sum').innerHTML = sum;
}

