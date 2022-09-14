<script setup>
import { onMounted, ref } from 'vue';

import { useAPIstore } from '../stores/apiStore';

import BarChart from '../components/BarChart.vue';

const apiStore = useAPIstore();

const loaded = ref(true);

const FBdata = ref({});

const chartDataSets = ref([]);

onMounted(async () => {
	FBdata.value = await apiStore.fetchFBdata();

	chartDataSets.value = [
		{
			label: 'GB CNC Bar Chart',
			data: FBdata.value.campaignImpresssions
		}
	];

	loaded.value = false;
});
</script>

<template>
	<v-card :loading="loaded" class="mx-auto my-12" max-width="800">
		<template slot="progress">
			<div class="mx-auto">
				<v-progress-circular color="deep-purple" height="10" indeterminate></v-progress-circular>
			</div>
		</template>
		<bar-chart v-if="!loaded" :chart-labels="FBdata.campaignNames" :chart-data-sets="chartDataSets"></bar-chart>
	</v-card>
</template>
