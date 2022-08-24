<script lang="ts">
	import { getElementById, elementIdStore } from '../../controllers/elementStore';
	import { toogleAside } from './asideState';

	$: dataById = getElementById($elementIdStore);
</script>

<aside
	class={`${
		$toogleAside ? 'flex' : 'hidden'
	}  lg:flex absolute lg:static top-0 bottom-0 right-0 flex-col w-[250px] bg-slate-800 h-[calc(100vh-50px)] max-h-screen  border-l-2 border-slate-700 text-slate-300 text-xs overflow-y-auto overflow-x-hidden p-2 space-y-4`}
>
	<div>{dataById.id}</div>
	{#if dataById.styles}
		<!-- content here -->
		<div>
			<p>Components</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.components}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Layout</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.layout}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Spacing</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.spacing}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Size</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.size}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Position</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.position}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Typography</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.typography}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Backgrounds</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.backgrounds}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Borders</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.borders}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
		<div>
			<p>Effects</p>
			<div class="bg-slate-900 p-2 rounded-md">
				<code>
					<textarea
						type="text"
						bind:value={dataById.styles.effects}
						class="bg-transparent w-full min-h-[30px] outline-none"
					/>
				</code>
			</div>
		</div>
	{/if}
</aside>
