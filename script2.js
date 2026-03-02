const balanceEl = document.getElementById('balance');
let balance = parseFloat(balanceEl.innerText);

// Form and buttons
const sendBtn = document.getElementById('sendBtn');
const depositBtn = document.getElementById('depositBtn');
const requestBtn = document.getElementById('requestBtn');

const sendForm = document.getElementById('sendMoneyForm');
const depositForm = document.getElementById('depositForm');
const requestForm = document.getElementById('requestForm');

const transactionsEl = document.getElementById('transactions');

// Show/hide forms
function hideAllForms() {
    sendForm.classList.add('hidden');
    depositForm.classList.add('hidden');
    requestForm.classList.add('hidden');
}

sendBtn.addEventListener('click', () => {
    hideAllForms();
    sendForm.classList.remove('hidden');
});

depositBtn.addEventListener('click', () => {
    hideAllForms();
    depositForm.classList.remove('hidden');
});

requestBtn.addEventListener('click', () => {
    hideAllForms();
    requestForm.classList.remove('hidden');
});

// Send Money
sendForm.addEventListener('submit', function(e){
    e.preventDefault();
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if(amount > balance){
        alert('Insufficient balance!');
        return;
    }

    balance -= amount;
    balanceEl.innerText = balance.toFixed(2);

    const li = document.createElement('li');
    li.innerHTML = `<span>Sent $${amount.toFixed(2)} to ${recipient}</span>`;
    transactionsEl.prepend(li);

    alert('Payment submitted', color = '#34a853');
    sendForm.reset();
});

// Deposit Money
depositForm.addEventListener('submit', function(e){
    e.preventDefault();
    const amount = parseFloat(document.getElementById('depositAmount').value);
    balance += amount;
    balanceEl.innerText = balance.toFixed(2);

    const li = document.createElement('li');
    li.innerHTML = `<span>Deposited $${amount.toFixed(2)}</span>`;
    transactionsEl.prepend(li);

    alert('Deposit successful');
    depositForm.reset();
});

// Request Money
requestForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('requestName').value;
    const amount = parseFloat(document.getElementById('requestAmount').value);

    const li = document.createElement('li');
    li.innerHTML = `<span>Requested $${amount.toFixed(2)} from ${name}</span>`;
    transactionsEl.prepend(li);

    alert('Money request sent');

    requestForm.reset();
});

document.getElementById("years").textContent = new Date().getFullYear();

document.getElementById("newsletterForm").addEventListener("submit", function(e)
{
    e.preventDefault();
    const email = document.getElementById("emailInput").value;

    if(email) {
        alert("Thank you for subscribing," + email + "!");

        document.getElementById("newsletterForm").reset();
    }
});