<script lang="ts">
	import type { ElementTypes } from '$lib/data/schemas/element.schemas';
	import { toogleAside } from '$lib/modules/builder/components/Aside/asideState';
	import { elementIdStore, elementOnHover } from '$lib/modules/builder/controllers/elementStore';
	import { tweenMe } from '$lib/cores/gsap/tweenMe';

	export let data: ElementTypes | undefined;
</script>

<div
	use:tweenMe
	on:mouseenter={() => ($elementOnHover = data?.id)}
	on:mouseleave={() => ($elementOnHover = '')}
	class={`${data?.styles?.components} ${data?.styles?.layout} ${data?.styles?.spacing} ${
		data?.styles?.size
	} ${data?.styles?.position} ${data?.styles?.typography} ${data?.styles?.backgrounds} ${
		data?.styles?.borders
	} ${data?.styles?.effects} opacity-0 ${
		$elementOnHover === data?.id && 'relative hover:ring hover:ring-green-500 hover:ring-offset-1'
	} ${
		$elementIdStore === data?.id &&
		'ring ring-red-500 ring-offset-1 hover:ring hover:ring-red-500 hover:ring-offset-1'
	}`}
>
	<div class="btn">{data?.id}</div>
	<slot><!-- optional fallback --></slot>

	<div
		on:click={() => {
			$elementIdStore = data?.id;
			$toogleAside = true;
		}}
		class={`absolute -top-[15px] left-[50%] -translate-x-[50%] h-[30px] w-[30px] bg-green-500 rounded-md ring ring-green-500 ring-offset-2 ${
			$elementOnHover === data?.id ? 'flex' : 'hidden'
		}
		`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			viewBox="0 0 20 20"
			fill="currentColor "
		>
			<path
				fill-rule="evenodd"
				d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
</div>
