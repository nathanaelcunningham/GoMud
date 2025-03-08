<script lang="ts">
	import { type ItemSpec, type ItemTypeInfo } from '$lib/api/types/item';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let selectedType = $state<ItemTypeInfo | null>(null);
	let selectedItem = $state<ItemSpec | null>(null);
</script>

<h1>Filters</h1>

<div class="">
	<label for="item-type">Item Type</label>
	<select id="item-type" bind:value={selectedType}>
		{#each data.item_types as item_type}
			<option value={item_type}>
				{item_type.Type}
			</option>
		{/each}
	</select>

	<label for="item-type">Item Type</label>
	<select id="item-type" bind:value={selectedItem}>
		{#if selectedType}
			{#each data.item_specs as item}
				{#if item.Type === selectedType.Type || item.Subtype === selectedType.Type}
					<option value={item}>
						{item.Name}
					</option>
				{/if}
			{/each}
		{/if}
	</select>
</div>

{#if selectedItem}
	<div class="flex flex-col px-2">
		<div class="flex">
			<h1 class="text-2xl">
				{selectedItem.Name}
				<span class="bg-slate-500 p-2 text-sm text-white">{selectedItem.ItemId}</span>
			</h1>
		</div>
		<div>
			<h2 class="text-xl">Appearance</h2>
		</div>
	</div>
{/if}
