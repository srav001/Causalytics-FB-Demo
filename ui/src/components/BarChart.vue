<template>
	<div :id="`${chartId}-container`" class="responsive">
		<canvas :id="chartId" style="width: 100%; max-width: 700px"></canvas>
	</div>
</template>

<script>
import { Chart, Tooltip, Legend, BarElement, BarController, CategoryScale, LinearScale } from 'chart.js';

Chart.register(Tooltip, Legend, BarElement, BarController, CategoryScale, LinearScale);

// const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export default {
	name: 'BarChart',
	props: {
		chartId: {
			type: String,
			default: Math.random().toString(36).substring(2)
		},
		chartLabels: {
			type: Array,
			default: () => [],
			required: true
		},
		chartDataSets: {
			type: Array,
			default: () => [],
			required: true
		}
	},
	mounted() {
		const ctx = document.getElementById(this.chartId).getContext('2d');
		this.createChart(ctx, {
			type: 'bar',
			data: {
				labels: this.chartLabels,
				datasets: this.chartDataSets
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'top'
					}
				}
			}
		});
	},
	methods: {
		createChart: (ctx, config) => new Chart(ctx, config)
	}
};
</script>
