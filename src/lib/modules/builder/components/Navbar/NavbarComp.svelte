<script>
	import { toogleAside } from '../Aside/asideState';
	import { showNavbar, toogleNavbar } from './navState';
</script>

<nav
	class={`${
		$showNavbar ? 'flex' : 'hidden'
	} lg:flex py-4 flex-col items-center bg-slate-800 w-10 h-[calc(100vh-50px)] max-h-screen  border-r-2 border-slate-700 z-40`}
>
	<div
		on:click={() => {
			$toogleAside = false;
		}}
		class="text-base-content cursor-pointer select-none"
	>
		A
	</div>
</nav>
