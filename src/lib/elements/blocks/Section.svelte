<script lang="ts">
	import type { ElementTypes } from '$lib/data/schemas/element.schemas';
	import { elementIdStore } from '$lib/modules/builder/controllers/elementStore';

	export let data: ElementTypes | undefined;
</script>

<section class={`${data?.styles}`}>{data?.content}<slot><!-- optional fallback --></slot></section>
