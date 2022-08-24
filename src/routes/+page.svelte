<script>
	let css1 = '';
	let css2 = '';
</script>

<input type="text" class="w-full border border-slate-500 p-2" bind:value={css1} />
<input type="text" class="w-full border border-slate-500 p-2" bind:value={css2} />
<h1 class={`${css1}`}>Taillwind css</h1>
<button class={`btn btn-primary ${css2}`}>button</button>
