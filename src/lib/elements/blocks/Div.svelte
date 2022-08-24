<script lang="ts">
	import type { ElementTypes } from '$lib/data/schemas/element.schemas';
	import { elementIdStore } from '$lib/modules/builder/controllers/elementStore';

	export let data: ElementTypes | undefined;
</script>

<div
	class={`${data?.styles?.components} ${data?.styles?.layout} ${data?.styles?.spacing} ${
		data?.styles?.size
	} ${data?.styles?.position} ${data?.styles?.typography} ${data?.styles?.backgrounds} ${
		data?.styles?.borders
	} ${data?.styles?.effects} hover:ring hover:ring-teal-500 hover:ring-offset-1 ${
		$elementIdStore === data?.id &&
		'ring ring-red-500 ring-offset-1 hover:ring hover:ring-red-500 hover:ring-offset-1'
	}`}
>
	<button class="btn" on:click={() => ($elementIdStore = data?.id)}>{data?.id}</button>
	<slot><!-- optional fallback --></slot>
</div>
