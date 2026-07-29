<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	// preload animation
	let showPreloader = $state(true);
	let flyProps = $state({ x: '0', y: '-140%', duration: 400 });

	onMount(() => {
		if (window.innerWidth < 780) {
			flyProps = { x: '100%', y: '0', duration: 400 };
		}
		setTimeout(() => {
			showPreloader = false;
		}, 200);
	});
</script>

{#if showPreloader}
	<div class="preloader-container">
		<div 
            class="square" 
            style="background-color: #292929" 
            out:fly={{ ...flyProps, delay: 0 }}
        ></div>
		<div
			class="square"
			style="background-color: #212121"
			out:fly={{ ...flyProps, delay: 100 }}
		></div>
		<div
			class="square"
			style="background-color: #292929"
			out:fly={{ ...flyProps, delay: 200 }}
		></div>
	</div>
{/if}

<style>
    .preloader-container {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        z-index: 9999;
        background-color: transparent;
        overflow: hidden;
    }
    .square {
        flex: 1 1 0;
        height: 100%;
        width: auto;
    }
    @media (max-width: 780px) {
		.preloader-container {
			flex-direction: column; 
		}
		.square {
			width: 100%;
			height: auto;
		}
	}
</style>
