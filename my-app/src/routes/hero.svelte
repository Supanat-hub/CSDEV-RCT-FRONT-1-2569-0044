<div class="hero relative flex flex-col h-124.25 items-center gap-5 pt-45">
        <!--ซ้ายบน-->
        <img src="/grassedEmoji.svg" alt="floating emoji" style="animation-duration: 4s" class="animate-float absolute top-25 left-10 md:top-30 md:left-30 w-15 h-15 lg:w-16 lg:h-16 -rotate-30 z-0" />
        <!--ซ้ายล่าง-->
        <img src="/teeth.svg" alt="floating emoji" style="animation-duration: 8s" class="animate-float absolute bottom-5 left-5 md:bottom-30 md:left-15 w-20 h-20 lg:w-24 lg:h-24 z-0" />
        <!--ขวาบน-->
        <img src="/someone.svg" alt="floating emoji" style="animation-duration: 6s" class="animate-float absolute top-20 right-0 md:top-25 md:right-15 w-20 h-20 lg:w-24 lg:h-24 z-0" />
        <!--ขวาล่าง-->
        <img src="/die.svg" alt="floating emoji" style="animation-duration: 4s" class="animate-float absolute bottom-0 right-5 md:bottom-20 md:right-20 w-16 h-16 lg:w-20 lg:h-20 z-0" />

		<h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide text-white">Take Banana</h1>
		<h3 class="text-lr md:text-2xl lg:text-[32px] font-light tracking-wider text-white">Copied png to use as your emoji</h3>
		<a href="#explore" class="use-hover-cursor rounded-xl bg-[#FF7A45] transition duration-300 ease-in-out px-20 py-3 text-black hover:bg-[#f8885c] text-[12px] md:text-[14px] lg:text-[16px] font-medium mt-5">
			Explore banana
		</a>
</div>

<style>
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
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
</style>