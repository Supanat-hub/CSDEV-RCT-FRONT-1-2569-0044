<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-5xl">
	<header class="flex items-center justify-start gap-2.5">
		<img src="/logo.svg" alt="logo" class="h-9 w-9" />
		<span class="text-2xl font-semibold">Banana</span>
	</header>

	<div class="hero flex flex-col h-124.25 items-center gap-5 pt-45">
		<h1 class="text-8xl font-semibold tracking-wide">Take Banana</h1>
		<h3 class="text-[32px] font-light tracking-wider">Copied png to use as your emoji</h3>
		<button class="rounded-xl bg-[#FF7A45] px-20 py-3 text-black hover:bg-[#f8885c] text-[16px] font-medium mt-5">
			Explore banana
		</button>
	</div>

    <div class="flex flex-col items-center">
        <h3 class=" text-2xl font-semibold tracking-wider mt-6">Explore</h3>
    </div>

    <div class="rounded-t-2xl bg-[#1F1F1F] mt-2 p-2 grid grid-cols-9">
        {#each data.emojis as emoji}
        <div>
            <img src={`https://recruit.cskmitl.com/api/emoji/${emoji.id}`} alt="emoji" />
            <p class="EmojiNmae">: {emoji.name} :</p>
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
