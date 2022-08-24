<script lang="ts">
	import { toogleNavbar } from './navState';
</script>

<div
	style="display: {$toogleNavbar ? 'block' : 'none'};"
	class="absolute top-0 left-[40px] bottom-0 w-[250px] bg-slate-800 z-40"
/>
