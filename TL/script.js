// Chart Configuration
Chart.defaults.color = '#a0a0a0';
Chart.defaults.borderColor = '#333';

// 1. Water Tank Gauge (Doughnut Chart)
const ctxTank = document.getElementById('tankGauge').getContext('2d');
const tankGauge = new Chart(ctxTank, {
    type: 'doughnut',
    data: {
        labels: ['Fill', 'Empty'],
        datasets: [{
            data: [65, 35], // 65% Full
            backgroundColor: ['#2ecc71', '#3a3f4b'],
            borderWidth: 0,
            cutout: '80%',
            circumference: 180,
            rotation: 270,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});

// 2. Temp & Humidity Line Chart
const ctxLine = document.getElementById('tempHumChart').getContext('2d');
const tempHumChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['12:00', '12:15', '12:30', '12:45', '1:00', '1:15', '1:30', '1:45', '1:51'],
        datasets: [
            {
                label: 'Temperature',
                data: [78, 79, 80, 81, 82, 82, 81, 81, 81],
                borderColor: '#2ecc71',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0
            },
            {
                label: 'Humidity',
                data: [60, 59, 58, 59, 60, 61, 62, 62, 62],
                borderColor: '#e0e0e0',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                position: 'top',
                labels: { color: '#a0a0a0', usePointStyle: true, boxWidth: 8 }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: { color: '#333' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// 3. Water Level Chart (Doughnut with bottom half)
const ctxWater = document.getElementById('waterLevelChart').getContext('2d');
const waterLevelChart = new Chart(ctxWater, {
    type: 'pie', // Using pie for half-circle fill effect usually, but doughnut is easier for rings.
    // Let's emulate the image: it looks like a solid semi-circle gauge or pie.
    // Actually, looking at image "Water Level", it's a solid circle, bottom half green, top half grey?
    // The number 6 is in the middle.
    // It looks more like a pie chart split horizontally.
    data: {
        labels: ['Level', 'Empty'],
        datasets: [{
            data: [50, 50], // Half and Half visual
            backgroundColor: ['#2ecc71', '#555'],
            borderWidth: 0,
            rotation: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
    }
});

// 4. Update Sliders Display (Optional interactivity)
document.querySelectorAll('.vertical-range').forEach(range => {
    range.addEventListener('input', (e) => {
        // Update the value text sibling
        const valueSpan = e.target.nextElementSibling;
        if(valueSpan) valueSpan.innerText = e.target.value;
    });
});
