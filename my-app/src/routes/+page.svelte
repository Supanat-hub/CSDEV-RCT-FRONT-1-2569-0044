<script lang="ts">
	import type { PageData } from './$types';
    import { fly } from 'svelte/transition';
	let { data }: { data: PageData } = $props();

    let copiedId = $state<string | null>(null);

    async function handleCopy(id: string) {
        copiedId = id;

        try {
            const response = await fetch(`/api/emoji/${id}`);
            const blob = await response.blob();

            if (navigator.clipboard && window.ClipboardItem) {
                await navigator.clipboard.write([
                    new ClipboardItem({ [blob.type]: blob }),
                ]);
            }
        } catch (error) {
            console.warn('Copy failed', error);
        }

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

	<div class="hero relative flex flex-col h-124.25 items-center gap-5 pt-45">
        <!--ซ้ายบน-->
        <img src="/grassedEmoji.svg" alt="floating emoji" class="animate-float animate-delay-2000 absolute top-25 left-10 md:top-30 md:left-30 w-15 h-15 lg:w-16 lg:h-16 -rotate-30 z-0" />
        <!--ซ้ายล่าง-->
        <img src="/teeth.svg" alt="floating emoji" class="animate-float absolute bottom-5 left-5 md:bottom-30 md:left-15 w-20 h-20 lg:w-24 lg:h-24 z-0" />
        <!--ขวาบน-->
        <img src="/someone.svg" alt="floating emoji" class="animate-float absolute top-20 right-0 md:top-25 md:right-15 w-20 h-20 lg:w-24 lg:h-24 z-0" />
        <!--ขวาล่าง-->
        <img src="/die.svg" alt="floating emoji" class="animate-float animate-delay-2000 absolute bottom-0 right-5 md:bottom-20 md:right-20 w-16 h-16 lg:w-20 lg:h-20 z-0" />

		<h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide">Take Banana</h1>
		<h3 class="text-lr md:text-2xl lg:text-[32px] font-light tracking-wider">Copied png to use as your emoji</h3>
		<a href="#explore" class="rounded-xl bg-[#FF7A45] transition duration-300 ease-in-out px-20 py-3 text-black hover:bg-[#f8885c] text-[12px] md:text-[14px] lg:text-[16px] font-medium mt-5">
			Explore banana
		</a>
	</div>

    <div id="explore" class="flex flex-col items-center">
        <h3 class=" text-[16px] md:text-[18px] lg:text-2xl font-semibold tracking-wider mt-6">Explore</h3>
    </div>

    <div class="rounded-2xl bg-[#1F1F1F] mt-2 p-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
        {#each data.emojis as emoji}
        <div role="button" tabindex="0" class="relative cursor-pointer rounded-lg flex flex-col items-center justify-center m-1 p-2 transition duration-300 ease-in-out hover:bg-[#FFFFFF1C]"
            onclick={() => handleCopy(emoji.id)}
            onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleCopy(emoji.id);
                    e.preventDefault(); // auti scroll
                }
            }}
        >
            <img src={`/api/emoji/${emoji.id}`} alt="{emoji.name}" class="w-13.5 h-13.5" loading="lazy" decoding="async"/>
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

<div class="bg-[#1D1D1D] text-[#8D8D8D] mt-4 md:mt-6 lg:mt-10 p-4 md:p-6 lg:p-8 font-normal text-[10px] md:text-[14px] text-center">
    Ⓒ Copyright 2026 CSDEV KMITL. All rights reserved.
</div>

<style>
	span,h1,h3,p {
		color: #ffffff;
	}
	header {
		height: 72px;
		padding: 14px 18px;
	}

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .animate-float {
        animation-name: float;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    .animate-delay-2000 {
        animation-delay: 2000ms; 
    }
</style>
