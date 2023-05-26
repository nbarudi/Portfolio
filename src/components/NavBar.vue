<template>

    <nav>
        <router-link to="/">Profile</router-link> - 
        <router-link to="/about">About Me</router-link> - 
        <router-link to="/projects">Projects</router-link> -
		<router-link to="/resume">Resume</router-link>
    </nav>

</template>

<style scoped>

    nav {
		padding: 30px;
		font-size: 20px;
	}

	nav a {
		font-weight: bold;
		text-decoration: none;
		font-size: 16px;
		color: var(--highlight);
	}

	nav a:hover {
		text-decoration: underline;
        font-size: 22px;
	}

	nav a.router-link-exact-active {
		font-size: 20px;
	}

</style>