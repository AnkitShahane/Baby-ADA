var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Total Supply', 'Tokens for presale', 'Tokens for liquidity', 'Tokens for private sale', 'Team tokens', 'Tokens for Marketing'],
        datasets: [{
            label: '# of Votes',
            data: [ 100000000000, 50000000000, 35000000000, 7000000000, 4000000000, 4000000000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          
            
        }]
    },
  
});