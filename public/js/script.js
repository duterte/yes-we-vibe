'use-strict';

(function () {
  const tryAgainBtn = document.querySelector('#try-again-btn');
  const xBtn = document.querySelector('#x-btn');
  const overlay = document.querySelector('#overlay');
  const completeOrder = document.querySelector('#complete-order');
  const continueToPayment = document.querySelector('#continue-to-payment');
  const shipping = document.querySelector('#shipping');
  const payment = document.querySelector('#payment');

  [completeOrder, tryAgainBtn, xBtn].forEach((element) => {
    if (element) {
      element.addEventListener('click', () => {
        overlay.classList.toggle('toggle-view');
      });
    }
  });

  replaceLocation(shipping, '/');
  replaceLocation(continueToPayment, '/page2');
  replaceLocation(payment, '/page2');

  function replaceLocation(element, destination) {
    if (element) {
      element.addEventListener('click', () => location.replace(destination));
    }
  }
})();
