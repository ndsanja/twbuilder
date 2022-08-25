<script>
	import { elementIdStore, getElementById } from '$lib/modules/builder/controllers/elementStore';

	import WrapperPanel from '../WrapperPanel.svelte';

	$: data = getElementById($elementIdStore);
</script>

<WrapperPanel title="Borders">
	{#if data.styles}
		<div class="bg-slate-900 p-2 rounded-md">
			<code>
				<textarea
					type="text"
					bind:value={data.styles.borders}
					class="bg-transparent w-full min-h-[30px] outline-none"
				/>
			</code>
		</div>
	{/if}
</WrapperPanel>
