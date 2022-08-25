<script lang="ts">
	import { toogleAside } from '../Aside/asideState';

	import { showNavbar, toogleNavbar } from '../Navbar/navState';

	let toogleButton = false;
</script>

<main
	class="flex-1 bg-base-100 w-10 h-[calc(100vh-50px)] max-h-screen overflow-y-auto"
	on:click={() => {
		$toogleNavbar = false;
		$showNavbar = false;
	}}
>
	<slot><!-- optional fallback --></slot>
</main>
<div class={`absolute bottom-4 ${$showNavbar ? 'right-4' : 'left-4'} lg:hidden z-50`}>
	<button
		class={`${toogleButton ? 'inline-flex' : 'hidden'} absolute -top-14 ${
			$showNavbar ? 'right-5' : 'left-5'
		}  btn btn-info btn-circle btn-md`}
		on:click={() => {
			$showNavbar = true;
			$toogleNavbar = true;
			$toogleAside = false;
			toogleButton = false;
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
			/>
		</svg>
	</button>
	<button
		class={`${toogleButton ? 'inline-flex' : 'hidden'} absolute -top-2 ${
			$showNavbar ? 'right-14' : 'left-14'
		}  btn btn-warning btn-circle btn-md`}
		on:click={() => {
			$showNavbar = false;
			$toogleNavbar = false;
			$toogleAside = false;
			toogleButton = false;
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
			/>
		</svg>
	</button>
	<button
		class=" btn btn-primary btn-circle btn-md"
		on:click={() => (toogleButton = !toogleButton)}
	>
		{#if toogleButton}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		{/if}
	</button>
</div>
