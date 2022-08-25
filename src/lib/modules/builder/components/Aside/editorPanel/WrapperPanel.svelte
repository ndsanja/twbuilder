<script lang="ts">
	let opened = true;
	export let title: string;
</script>

<section class="border-b border-slate-700 overflow-x-hidden">
	<div
		class="flex items-center space-x-1 px-2 font-bold bg-slate-900 py-2"
		on:click={() => (opened = !opened)}
	>
		{#if opened}
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		{:else}
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		{/if}

		<h3 class="select-none">{title}</h3>
	</div>
	{#if opened}
		<div class="px-2 py-1">
			<slot />
		</div>
	{/if}
</section>
