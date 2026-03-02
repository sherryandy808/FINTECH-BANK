const notificationBell = document.getElementById('notification');

notificationBell.addEventListener('click', () => {
    alert('A message will be sent to your email by Fintech Bank', + 'background-color = #333');
});
// Chart
const ctx = document.getElementById('balanceChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
            data: [5000, 5200, 5100, 5300, 5400, 5420, 5420],
            borderColor: 'white',
            backgroundColor: 'rgba(255,255,255,0.2)',
            tension: 0.4,
            fill:true
        }]
    },
    options: {
        plugins:{legend:{display:false}},
        scales:{x:{display:false},y:{display:false}}
    }
});

// Modal
function openModal(){
  document.getElementById('modal').style.display="flex";
}

function sendMoney(){
  let amount=document.getElementById('amount').value;
  let balanceElement=document.getElementById('balance');
  let currentBalance=parseFloat(balanceElement.innerText.replace('$','').replace(',',''));

  if(amount && amount>0){
    currentBalance -= amount;
    balanceElement.innerText="$"+currentBalance.toFixed(2);
    document.getElementById('modal').style.display="none";
  }
}

function serviceAlert(serviceName){
    showCustomerAlert(serviceName + "service activated successfully!")
}

function notifyUser(){
    showCustomerAlert("A message will be sent to your email by FINTECH Bank.");
}

function showCustomerAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
   }, 3000);    
}
