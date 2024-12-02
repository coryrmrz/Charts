const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data: {
            labels: ["Aqua","Green","Yellow","Pink"],
            datasets: [
                {
                    label: "Votes",
                    data: [12,19,3,10],
                    borderWidth: 2,
                    backgroundColor: [
                        'rgba(24, 217, 228, 0.8)',
                        'rgba(24, 228, 43, 0.8)',
                        'rgba(226, 228, 24, 0.8)',
                        'rgba(226, 24, 228, 0.8)'],
                    borderColor: [
                        'rgba(24, 217, 228)',
                        'rgba(24, 228, 43)',
                        'rgba(226, 228, 24)',
                        'rgba(226, 24, 228)'],
                }
            ]
        }
    }
)