<script lang="ts">
	import { getElementById, elementIdStore } from '../../controllers/elementStore';
	import { toogleAside } from './asideState';
	import BackgroundsPanel from './editorPanel/backgrounds/BackgroundsPanel.svelte';
	import BordersPanel from './editorPanel/borders/BordersPanel.svelte';
	import EffectsPanel from './editorPanel/effects/EffectsPanel.svelte';
	import LayoutPanel from './editorPanel/layout/LayoutPanel.svelte';
	import PositionPanel from './editorPanel/position/PositionPanel.svelte';
	import SelectorPanel from './editorPanel/selector/SelectorPanel.svelte';
	import SizePanel from './editorPanel/size/SizePanel.svelte';
	import SpacingPanel from './editorPanel/spacing/SpacingPanel.svelte';
	import TitlePanel from './editorPanel/title/TitlePanel.svelte';
	import TypographyPanel from './editorPanel/typography/TypographyPanel.svelte';

	$: dataById = getElementById($elementIdStore);
</script>

<aside
	class={`${
		$toogleAside ? 'flex' : 'hidden'
	}  lg:flex absolute lg:static top-0 bottom-0 right-0 flex-col w-[250px] bg-slate-800 h-[calc(100vh-50px)] max-h-screen  border-l-2 border-slate-700 text-slate-300 text-xs`}
>
	<TitlePanel />
	<SelectorPanel />
	{#if dataById.id !== undefined}
		<div class="overflow-y-auto">
			<LayoutPanel />
			<SpacingPanel />
			<SizePanel />
			<PositionPanel />
			<TypographyPanel />
			<BackgroundsPanel />
			<BordersPanel />
			<EffectsPanel />
		</div>
	{/if}
</aside>
