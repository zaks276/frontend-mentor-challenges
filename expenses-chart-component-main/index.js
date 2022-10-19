//Get canvas element
const ctx = document.getElementById('chart').getContext('2d');

//Fetch the json data
fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        //Map the x and y values from json file
        let xValues = data.map(item => item.day);

        let yValues = data.map(item => item.amount);

        //Get current day and set bar colors
        let barBackgroundColors = [];
        let barHoverBackgroundColors = [];

        const date = new Date();
        let currentDay;

        if (date.getDay() === 0) {
            currentDay = 6;
        } else {
            currentDay = date.getDay() - 1;
        }


        for (let i = 0; i < 7; i++) {
            if (i === currentDay) {
                barBackgroundColors.push('hsl(186, 34%, 60%)');
            } else {
                barBackgroundColors.push('hsl(10, 79%, 65%)');
            }

        }

        for (let i = 0; i < 7; i++) {
            if (i === currentDay) {
                barHoverBackgroundColors.push('hsl(186, 50%, 80%)');
            } else {
                barHoverBackgroundColors.push('hsl(10, 95%, 85%)');
            }

        }

        //Draw chart
        Chart.defaults.font.family = "'DM Sans', sans-serif";
        Chart.defaults.font.size = 16;

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: xValues,
                datasets: [{
                    label: '',
                    data: yValues,
                    backgroundColor: barBackgroundColors,

                    borderRadius: 5,

                    hoverBackgroundColor: barHoverBackgroundColors,

                    borderSkipped: false

                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        display: false,
                    },

                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    }


                },

                //Change cursor to pointer when hovering over the bars
                onHover: (event, chartElement) => {
                    event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
                },

                plugins: {
                    tooltip: {
                        backgroundColor: 'hsl(25, 47%, 15%)',
                        xAlign: 'center',
                        yAlign: 'bottom',
                        caretSize: 0,
                        textAlign: 'center',
                        displayColors: false,
                        callbacks: {
                            title: function (context) {
                                return '';
                            },
                            label: function (context) {
                                let label = context.dataset.label;

                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                }
                                return label;

                            }
                        }
                    },

                    legend: {
                        display: false
                    }
                },

                interaction: {
                    mode: 'point'
                }
            }

        });

    })