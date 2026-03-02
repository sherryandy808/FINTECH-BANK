// BALANCE CHART (Line Chart)
const ctxBalance = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(ctxBalance, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Balance ($)',
            data: [120000, 115000, 110000, 105000, 100000, 95000, 80000],
            backgroundColor: 'rgba(26, 115, 232, 0.2)',
            borderColor: '#1a73e8',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { mode: 'index', intersect: false }
        },
        scales: {
            y: { beginAtZero: false }
        }
    }
});

// SPENDING CHART (Bar Chart)
const ctxSpending = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(ctxSpending, {
    type: 'bar',
    data: {
        labels: ['Food', 'Transport', 'Entertainment', 'Bills', 'Shopping', 'Others'],
        datasets: [{
            label: 'Amount ($)',
            data: [450, 200, 300, 400, 250, 100],
            backgroundColor: [
                '#34a853', '#fbbc05', '#ea4335', '#1a73e8', '#ff7043', '#9c27b0'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { mode: 'index', intersect: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
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