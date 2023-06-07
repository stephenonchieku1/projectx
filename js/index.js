
// BAR CHART
var barChartOptions = {
    series: [{
      data: [10, 8, 6, 4, 2]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
    },
    colors: [
      "#2CB629"
     
    ],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: ["Tax", "Rent","wifi","Phone", "Monitor", "Headphones", "Camera"],
    },
    yaxis: {
      title: {
        text: "Count"
      }
    }
  };
  
  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();




  // line CHART
var areaChartOptions = {
    series: [{
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height:500,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: 'Purchase Orders',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
  // donut chart
  const chartData = {
    series: [44, 55, 13],
    labels: ['Expenses', 'Income', 'Savings']
  };

  // Options for the chart
  const chartOptions = {
    chart: {
      type: 'donut'
    },
    series: chartData.series,
    labels: chartData.labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width:200,
        
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  // Create the chart
  const chart = new ApexCharts(document.querySelector("#donut-chart"), chartOptions);
  chart.render();