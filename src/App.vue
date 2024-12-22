<script setup lang="ts">
	import { useUserStore } from './stores/useUserStore.ts';
	const store = useUserStore();
	const incrementCount = () => {
		store.increment();
	};
</script>

<template>
	<div>
		<h1>Hello {{ store.getCount }}</h1>
		<button @click="incrementCount">Increment</button>
	</div>
</template>
