<script setup>
import { onMounted, reactive, ref } from 'vue';

import { useAPIstore } from '../stores/apiStore';

import BarChart from '../components/BarChart.vue';

const apiStore = useAPIstore();

const chartDataSets = ref([]);

const apiState = reactive({
	loaded: true,
	error: false
});

const FBdata = ref(null);

onMounted(async () => {
	try {
		FBdata.value = await apiStore.fetchFBdata();

		chartDataSets.value = [
			{
				label: 'FB CNC Bar Chart',
				data: FBdata.value.campaignImpresssions
			}
		];
	} catch (e) {
		apiState.error = true;
	} finally {
		apiState.loaded = false;
	}
});
</script>

<template>
	<div>
		<h1 class="text-center mx-auto my-2">Causylatics Assignment</h1>
		<v-card :loading="apiState.loaded" :class="['text-center', { 'pa-5': apiState.error }]" max-width="800" outlined>
			<template slot="progress">
				<v-progress-circular class="my-2" color="deep-purple" height="10" indeterminate></v-progress-circular>
			</template>
			<template v-if="!apiState.loaded">
				<h1 v-if="apiState.error">Oops, an error occured...</h1>
				<bar-chart v-else :chart-labels="FBdata.campaignNames" :chart-data-sets="chartDataSets"></bar-chart>
			</template>
		</v-card>
	</div>
</template>

<style lang="scss">
.text-center {
	text-align: center;
}
.my-2 {
	margin-top: 2rem;
	margin-bottom: 2rem;
}
.pa-5 {
	padding: 5rem !important;
}
</style>
