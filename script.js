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
    document.querySelector('#congratulationsBtn').style.display = 'none';
    document.querySelector('#infoTimeout').textContent = 'Time out!, click the button to try again';
    document.querySelector('#tryAgain').classList.remove('d-none');
  }
}

// const countdownInterval = setInterval(updateCountdown, 1000);
function startCountdown() {
  countdownInterval = setInterval(updateCountdown, 1000);
}

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
  'Abisoye Mukaram',
  ' Johnson Sylvester',
  ' Tope Sarah',
  ' Kayode',
  ' Chukwu Olubukola',
  ' Okunola',
  'Denladi',
  'Gboyega  Mustapha',
  'Kabiru  Musa',
  'Kunle ',
  'Ebube Gods-Power',
  'Deji ',
  'John-guy',
  'Levi',
  'Franklin',
  'Kelechi',
  'Modi',
  'Eke',
  'Belema',
  'Golden',
  'Wisdom',
  'Gods-love',
  'Lawrence',
  'Ogolo James',
  'Toinpre .P',
  'Life',
  'Favor',
  'Chibuzor',
  'Power',
  'King Propsper',
  'Promise',
  'Fynboy',
  'Tekena',
  'Abibo Tonye',
  'Abbey Peterson',
  'Graceland',
  'Albert',
  'Kelvin Alex',
  'Amadi',
  'Hassan',
  'Savior',
  'Morgan E.',
  'Wisdom Obinna',
  'Calvin West',
  'C. Chinedu',
  'Henry',
  'Christain Brown',
  'Coockey Precious',
  'D. Vincent',
  'Steve',
  'Promise Edwin',
  'Kingsley Festus',
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

// GENERATE CARD

// Sample data array containing the card information
const cardData = [
  {
    amount: 'N268,200',
    timeAgo: '1 hr ago',
    category: 'Sports Betting',
    email: 'g************@gmail.com',
  },
  {
    amount: 'N150,000',
    timeAgo: '2 hrs ago',
    category: 'Sports Betting',
    email: 'e************@yahoo.com',
  },
  {
    amount: 'N302,250',
    timeAgo: '30 mins ago',
    category: 'Sports Betting',
    email: 'h********@outlook.com',
  },
  {
    amount: 'N52,080',
    timeAgo: '1 day ago',
    category: 'Sports Betting',
    email: 'v***********@outlook.com',
  },

  {
    amount: 'N122,00',
    timeAgo: '5 hrs ago',
    category: 'Sports Betting',
    email: 'O*********@outlook.com',
  },

  {
    amount: 'N93,500',
    timeAgo: '1 day ago',
    category: 'Sports Betting',
    email: 'p**********@outlook.com',
  },
];

// Function to create and append cards
function generateCards() {
  const container = document.getElementById('grandPrizeContainer');
  container.innerHTML = ''; // Clear any existing content

  cardData.forEach((data) => {
    // Create the card element
    const card = document.createElement('div');
    card.className = 'leader-card shadow-sm';

    // Card header
    const header = document.createElement('header');
    header.className = 'd-flex justify-content-between align-items-center gap-1';

    const amountElement = document.createElement('h6');
    amountElement.className = 'fw-semibold ';
    amountElement.innerText = data.amount;

    const timeElement = document.createElement('span');
    timeElement.innerText = data.timeAgo;

    header.appendChild(amountElement);
    header.appendChild(timeElement);

    // Card body
    const body = document.createElement('div');
    body.className = 'd-flex justify-content-between w-100';

    const categoryElement = document.createElement('small');
    categoryElement.innerText = data.category;

    const emailElement = document.createElement('p');
    emailElement.innerText = data.email;

    body.appendChild(categoryElement);
    body.appendChild(emailElement);

    // Append header and body to the card
    card.appendChild(header);
    card.appendChild(body);

    // Append card to the container
    container.appendChild(card);
  });
}

// Run the function to generate cards on page load
generateCards();

// share count
let shareCount = 0;

const shareBtn = document.getElementById('shareBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const congratulationsBtn = document.getElementById('congratulationsBtn');
const progressBarContainer = document.querySelector('.progress-bar-container');

// Event Listener for the Share Button
shareBtn.addEventListener('click', function (event) {
  progressBarContainer.classList.remove('d-none');
  // Increment share count
  shareCount++;

  // Update progress bar and text
  progressBar.value = shareCount;

  // Check if the share count has reached 5
  if (shareCount >= 5) {
    congratulationsBtn.classList.remove('d-none');
    shareBtn.classList.add('d-none'); // Hide the share button
  }
});
function errorModal() {
  let modal = document.querySelector('#errorModal');
  console.log(modal);
  modal.classList.add('active');
}
