<script lang="ts">
    import { fly } from 'svelte/transition';

    type Emoji = {
        id: string;
        name: string;
    };

    let { emojis }: { emojis: Emoji[] } = $props();
    let copiedId = $state<string | null>(null);

    async function handleCopy(id: string) {
        copiedId = id;

        try {
            const emojiUrl = `${window.location.origin}/api/emoji/${id}`;
            const response = await fetch(emojiUrl);
            const contentType = response.headers.get('content-type') || '';

            if (contentType.includes('image/gif')) {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(emojiUrl);
                }
            } else {
                const blob = await response.blob();
                if (navigator.clipboard && window.ClipboardItem) {
                    await navigator.clipboard.write([
                        new ClipboardItem({ [blob.type]: blob }),
                    ]);
                }
            }
        } catch (error) {
            console.warn('Copy failed', error);
        }

        setTimeout(() => {
            copiedId = null;
        }, 500);
    }
</script>

<div class="rounded-2xl bg-[#1F1F1F] mt-2 p-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
        {#each emojis as emoji}
        <div role="button" tabindex="0" class="use-hover-cursor relative rounded-lg flex flex-col items-center justify-center m-1 p-2 transition duration-300 ease-in-out hover:bg-[#FFFFFF1C]"
            onclick={() => handleCopy(emoji.id)}
            onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleCopy(emoji.id);
                    e.preventDefault(); // auti scroll
                }
            }}
        >
            <img src={`/api/emoji/${emoji.id}`} alt="{emoji.name}" class="w-13.5 h-13.5" loading="lazy" decoding="async"/>
            <p class="flex text-[11px] max-w-18 pt-5 tracking-wider font-extralight text-white">
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