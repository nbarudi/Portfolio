<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue';

</script>

<template>
    <NavBar />
    <router-view />
</template>

<style>
	:root {
		--background: 30, 41, 59;
		--foreground: 148, 163, 184;
		--highlight: 8, 201, 185;
		--letter-spacing: 0.5px;
		--line-height: 1.6;
		--fontweight: 400;

		background-color: rgb(var(--background));
		color: rgb(var(--foreground));
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		font-weight: var(--fontweight);
	}

	a,
	a:visited,
	a:hover {
		color: inherit;
		text-decoration: inherit;
	}
</style>
