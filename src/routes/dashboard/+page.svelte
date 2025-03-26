<script>
    let data = $state([{fruit: "banana", value: 100}, {fruit: "mango", value: 200}])
    let reports = $state({
        total: 0,
        legit: 0
    })

    import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid, FontColorAltSolid } from 'flowbite-svelte-icons';

  let chartOptions = $state({
    series: [35.1, 5.4],
    colors: ['#1C64F2', '#E74694'],
    chart: {
      height: 320,
      width: '100%',
      type: 'donut'
    },
    stroke: {
      colors: ['transparent'],
      lineCap: ''
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20,
              color: '#FFFFFF'
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Reports',
              fontFamily: 'Inter, sans-serif',
              color: '#FFFFFF',
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return `${sum}k`;
              }
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              color: '#FFFFFF',
              formatter: function (value) {
                return value + 'k';
              }
            }
          },
          size: '80%'
        }
      }
    },
    grid: {
      padding: {
        top: -2
      }
    },
    labels: ['Legitimate', 'Likely False'],
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom',
      fontFamily: 'Inter, sans-serif',
      labels: {
        colors: '#FFFFFF'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF'
        },
        formatter: function (value) {
          return value + 'k';
        }
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#FFFFFF'
        },
        formatter: function (value) {
          return value + 'k';
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    }
  });

  const barOptions = $state({
    series: [
      {
        name: 'Category',
        data: [20,22,24,25,25,25,25,25,5252,5],
        color: '#31C48D'
      }
    ],
    chart: {
      sparkline: { enabled: false },
      type: 'bar',
      width: '100%',
      height: 400,
      toolbar: { show: false }
    },
    fill: { opacity: 1 },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '100%',
        borderRadiusApplication: 'end',
        borderRadius: 6,
        dataLabels: { position: 'top' }
      }
    },
    legend: { show: true, position: 'bottom' },
    dataLabels: { enabled: false },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) { return value + ' reports'; }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400 text-black',
          color: "black"
        }
      },
      categories: ["a","b","c","d","e","f","g","h","i","j"],
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400 text-black',
          color: "black"
        },
        color: "black"
      }
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: -20 }
    }
  });



</script>

<div class="min-h-screen text-white">
	<div class="container mx-auto px-4 py-12">
		<!-- Hero Section -->
		<header class="text-center mb-16 transition-all duration-700">
			<h1 class="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
				Dashboard
			</h1>
			<p class="text-xl md:text-2xl max-w-3xl mx-auto">
				See realtime reports.
            </p>
		</header>

			<!-- Report Form -->
            <div class="mt-8 mx-auto bg-slate-800/50 rounded-lg p-6 md:p-8 max-w-3xl">
                <h2 class="text-2xl font-bold mb-4 text-teal-400">Citizen Reports</h2>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div class="w-full md:w-1/3 space-y-2 text-center md:text-left justify-center">
                        <h3 class="text-lg text-white">{chartOptions.series[0]}k {chartOptions.labels[0]}</h3>
                        <h3 class="text-lg text-white">{chartOptions.series[1]}k {chartOptions.labels[1]}</h3>
                    </div>
                    <div class="w-full md:w-2/3">
                        <Chart options={chartOptions} class="w-full text-slate-300 h-full" />
                    </div>
                </div>
            </div>

            <div class="mt-8 mx-auto bg-slate-800/50 rounded-lg p-6 md:p-8 max-w-3xl">
                <h2 class="text-2xl font-bold mb-4 text-teal-400">Reports Category</h2>
                <Chart options={barOptions} />
            </div>

            
            <div class="mt-8 mx-auto bg-slate-800/50 rounded-lg p-6 md:p-8 max-w-3xl">
                <h2 class="text-2xl font-bold mb-4 text-teal-400">View Detailed Reports</h2>
                
            </div>
            

        <div class="mt-8 ">

        </div>
    </div>
</div>

<style>
	@keyframes float {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-10px); }
		100% { transform: translateY(0px); }
	}
</style>
