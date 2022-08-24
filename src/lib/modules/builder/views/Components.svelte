<script lang="ts">
	import type { ElementTypes } from '$lib/data/schemas/element.schemas';
	import Element from '$lib/elements/index.svelte';

	export let elementData: ElementTypes[] = [];
</script>

{#each elementData as data (data.id)}
	<Element {data} elName={data.elementName}>
		{#if data.children?.length}
			<svelte:self elementData={data.children}>
				<Element {data} elName={data.elementName}>
					<slot />
				</Element>
			</svelte:self>
		{/if}
	</Element>
{/each}
