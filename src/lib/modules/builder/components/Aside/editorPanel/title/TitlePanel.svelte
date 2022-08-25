<script lang="ts">
	import { getElementById, elementIdStore } from '$lib/modules/builder/controllers/elementStore';

	$: data = getElementById($elementIdStore);
	console.log(data);
</script>

<section class="px-2 py-2 border-b border-slate-700 font-semibold bg-slate-900">
	<h3>{data.id ?? `No element selected`}</h3>
</section>
