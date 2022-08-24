<script lang="ts">
	import { ElementEnums } from '../data/enums/element.enum';

	import type { ElementTypes } from '../data/schemas/element.schemas';

	import Div from './blocks/Div.svelte';
	import Section from './blocks/Section.svelte';

	export let elName: string | undefined;
	export let data: ElementTypes | undefined;
</script>

{#if elName === ElementEnums.div}
	<Div {data}>
		<slot />
	</Div>
{:else if elName === ElementEnums.section}
	<Section {data}>
		<slot />
	</Section>
{:else}
	<div />
{/if}
