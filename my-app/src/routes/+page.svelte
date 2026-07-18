<script lang="ts">
	import type { PageData } from './$types';
    import { fly } from 'svelte/transition';
	let { data }: { data: PageData } = $props();

    let copiedId = $state<string | null>(null);

    function handleCopy(id: string) {
        copiedId = id;

        setTimeout(() => {
            copiedId = null;
        }, 500);
    }
</script>

<div class="mx-auto max-w-5xl">
	<header class="flex items-center justify-start gap-2.5">
		<img src="/logo.svg" alt="logo" class="h-9 w-9" />
		<span class="text-2xl font-semibold">Banana</span>
	</header>

	<div class="hero flex flex-col h-124.25 items-center gap-5 pt-45">
		<h1 class="text-8xl font-semibold tracking-wide">Take Banana</h1>
		<h3 class="text-[32px] font-light tracking-wider">Copied png to use as your emoji</h3>
		<a href="#explore" class="rounded-xl bg-[#FF7A45] transition duration-300 ease-in-out px-20 py-3 text-black hover:bg-[#f8885c] text-[16px] font-medium mt-5">
			Explore banana
		</a>
	</div>

    <div id="explore" class="flex flex-col items-center">
        <h3 class="text-2xl font-semibold tracking-wider mt-6">Explore</h3>
    </div>

    <div class="rounded-2xl bg-[#1F1F1F] mt-2 p-2 grid grid-cols-9">
        {#each data.emojis as emoji}
        <div role="button" tabindex="0" class="relative cursor-pointer rounded-lg flex flex-col items-center justify-center m-1 p-2 transition duration-300 ease-in-out hover:bg-[#FFFFFF1C] {copiedId === emoji.id ? 'bg-black/60' : ''}"
            onclick={() => handleCopy(emoji.id)}
            onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleCopy(emoji.id);
                }
            }}
        >
            <img src={`https://recruit.cskmitl.com/api/emoji/${emoji.id}`} alt="{emoji.name}" class="w-13.5 h-13.5"/>
            <p class="EmojiNmae flex text-[12px] max-w-20 pt-5 tracking-wider font-normal">
                <span>:</span> 
                <span class="truncate min-w-0"> {emoji.name} </span>
                <span>:</span>
            </p>
            {#if copiedId === emoji.id}
                <div class="absolute inset-0 bg-[#000000BD] rounded-lg z-10"></div>
                <div 
                    transition:fly={{ y: -15, duration: 100, delay:200 }}
                    class="font-extralight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[14px] z-20 drop-shadow-md"
                >
                    Copied!
                </div>
            {/if}
        </div>
        {/each}
    </div>

</div>

<style>
	span,h1,h3,p {
		color: #ffffff;
	}
	header {
		height: 72px;
		padding: 14px 18px;
	}
</style>
