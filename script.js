// Countdown Timer for the Modal
let timeRemaining = 180; // 3 minutes in seconds
const countdownElement = document.getElementById('countdownTimer');

function updateCountdown() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  countdownElement.textContent = `${minutes}: ${seconds < 10 ? '0' : ''}${seconds}`; // Format with space between minutes and seconds
  timeRemaining--;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    // Change modal content when timer hits 0
    document.querySelector('.header-text').textContent = 'You missed the opportunity! Try again!';
    document.querySelector('.header-subText').style.display = 'none';
    document.querySelector('.instruction-text').style.display = 'none';
    document.querySelector('small').style.display = 'none';
    document.querySelector('.share-btn').style.display = 'none';
    document.querySelector('#instruction').style.display = 'none';
    document.querySelector('.try-again-btn').classList.remove('d-none');
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// TOAST

// User names for the toast notifications
const users = [
  'Chbuike',
  'Emmanuel Tochickwu',
  'Henry Kelechi',
  'Peter Nkanyi',
  'Testimony',
  'Bright Wilson',
  'Precious Boma',
  'Ali .N',
  'Bayo Bello',
  'Dearego ',
  'Patrick',
  'Philip',
  'Ben .K',
  'Lawson Ayo',
];

// Function to show the toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.className = 'show';
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 10000);
}

// Function to randomly pick a user and show the notification
function showRandomToast() {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  const message = `Hey, ${randomUser} just received their credit!`;
  showToast(message);
}

// Display the toast twice at random intervals
setTimeout(showRandomToast, Math.random() * 8000 + 9000); // Between 8s and 9s
setTimeout(showRandomToast, Math.random() * 20000 + 10000); // Between 10s and 25s

// reload page
function reloadPage() {
  window.location.reload();
}
