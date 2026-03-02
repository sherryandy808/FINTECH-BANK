// Chart
const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            data: [5000,5200,5100,5300,5400,5420,5420],
            borderColor:'#2563eb',
            backgroundColor:'rgba(37,99,235,0.1)',
            tension:0.4,
            fill:true
        }]
    },
    options:{
        plugins:{legend:{display:false}},
        scales:{x:{display:false},y:{display:false}}
    }
});

// Balance Toggle
let visible = true;
function toggleBalance(){
  const balance = document.getElementById("balance");
  if(visible){
    balance.innerText = "••••••";
  }else{
    balance.innerText = "$5,420.00";
  }
  visible = !visible;
}

// Modal
function openModal(){
  document.getElementById("modal").style.display="flex";
}

function sendMoney(){
  let amount=document.getElementById("amount").value;
  let balanceElement=document.getElementById("balance");
  let current=parseFloat(balanceElement.innerText.replace('$','').replace(',',''));

  if(amount && amount>0 && visible){
    current -= amount;
    balanceElement.innerText="$"+current.toFixed(2);
    document.getElementById("modal").style.display="none";
  }
}