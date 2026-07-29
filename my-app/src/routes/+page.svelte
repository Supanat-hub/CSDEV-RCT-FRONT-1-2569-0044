<script lang="ts">
    import './layout.css';
	import logo from '$lib/assets/logo.svg';
    import EmojiMenu from './emojiMenu.svelte';
    import Hero from './hero.svelte';
    import Preload from './preload.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

</script>

<svelte:head>
  <title>Banana | Home Page</title>
</svelte:head>

<Preload />

<div class="mx-auto max-w-5xl">
	<header class="flex items-center justify-start gap-2.5">
		<img src={logo} alt="logo" class="h-9 w-9" />
		<span class="text-2xl font-semibold">Banana</span>
	</header>

	<Hero />

    <div id="explore" class="flex flex-col items-center">
        <h3 class=" text-[16px] md:text-[18px] lg:text-2xl font-semibold tracking-wider mt-6">Explore</h3>
    </div>

    <EmojiMenu emojis={data.emojis} />

</div>

<div class="bg-[#1D1D1D] text-[#8D8D8D] mt-4 md:mt-6 lg:mt-10 p-4 md:p-6 lg:p-8 font-normal text-[10px] md:text-[14px] text-center">
    Ⓒ Copyright 2026 CSDEV KMITL. All rights reserved.
</div>

<style>
	span,h3 {
		color: #ffffff;
	}
	header {
		height: 72px;
		padding: 14px 18px;
	}
</style>
