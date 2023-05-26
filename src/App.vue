<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue';

</script>

<template>
    <NavBar />
    <router-view />
</template>

<style>
	:root {
		--background: 2, 8, 14;
		--foreground: 217, 226, 216;
		--highlight: 8, 201, 185;
		background-color: rgb(var(--background));
		color: rgb(var(--foreground));
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	a,
	a:visited,
	a:hover {
		color: inherit;
		text-decoration: inherit;
	}
</style>
