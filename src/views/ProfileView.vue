<template>
    <div class="header">
        <img alt="My Logo" src="@/assets/img/logo.png" />
        <div>
            <h1>Nick Barudi</h1>
            <span>Canadian Software Developer</span>
        </div>
    </div>
    <a href="https://github.com/nbarudi" target="_blank"> <img class="refLogo" src="@/assets/img/GitHub-logo.png" /> </a>
	<a href="https://www.linkedin.com/in/nicholas-barudi/" target="_blank"> <img class="refLogo" src="@/assets/img/linkedin.png" /> </a>

	<p>Contact Me: nbarudi@outlook.com</p>
</template>

<script lang="ts">
    export default {}
</script>

<style scoped>
	img {
		height: 10em;
		border-radius: 20%;
	}

	h1 {
		font-size: 2.5em;
		margin: 0.4em 0;
	}

	span,
	p {
		font-size: 1.2em;
	}

	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 2em;
	}
	.refLogo{
		height: 3em;
		padding-left: 1em;
	}
</style>