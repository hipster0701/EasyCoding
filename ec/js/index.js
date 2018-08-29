var menuToggle = document.querySelector('[data-js="menu-toggle"]');

// Remove this setInterval to trigger the open/close manually through the UI
var interval = setInterval(function() {
  menuToggle.click();
}, 2000);

// Clear the interval on any click
document.body.addEventListener('click', function () {
   clearInterval(interval);
});

menuToggle.addEventListener('click', function () {
  document.body.classList.toggle('panel-open');
  menuToggle.classList.toggle('open');
});

var closePanel = document.querySelector('[data-js="hidden-panel-close"]');

closePanel.addEventListener('click', function () {
  document.body.classList.remove('panel-open');
  menuToggle.classList.remove('open');
});