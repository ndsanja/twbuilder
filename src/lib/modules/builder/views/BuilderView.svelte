<script lang="ts">
	import AsideComp from '../components/Aside/AsideComp.svelte';
	import HeaderComp from '../components/Header/HeaderComp.svelte';
	import MainComp from '../components/Main/MainComp.svelte';
	import NavbarComp from '../components/Navbar/NavbarComp.svelte';
	import ComponentBuilder from '$lib/modules/builder/views/Components.svelte';
	import MainNavbar from '../components/Navbar/MainNavbar.svelte';
	import { useSnapshot } from 'sveltio';
	import { elementDataStore } from '../controllers/elementStore';

	const elementData = useSnapshot(elementDataStore);
</script>

<HeaderComp />
<section class="flex relative mt-[50px]">
	<NavbarComp />
	<MainNavbar />
	<MainComp>
		<ComponentBuilder elementData={$elementData} />
	</MainComp>
	<AsideComp />
</section>
