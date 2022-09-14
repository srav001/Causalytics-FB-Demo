<script setup>
import { onMounted, ref } from 'vue';

import { useAPIstore } from '../stores/apiStore';

const apiStore = useAPIstore();

const FBdata = ref({});

onMounted(async () => {
	FBdata.value = await apiStore.fetchFBdata();

	console.log({ ...FBdata });
});
</script>

<template>
	<h1>test</h1>
</template>
