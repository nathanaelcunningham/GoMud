<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	let { children } = $props();

	// Define your navigation links
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Items', href: '/items' },
		{ name: 'Races', href: '/races' },
		{ name: 'Mobs', href: '/mobs' },
		{ name: 'Mutators', href: '/mutators' },
		{ name: 'Rooms', href: '/rooms' }
	];

	// Store the current path
	const currentPath = derived(page, ($page) => $page.url.pathname);
</script>

<div class="">
	<nav class="bg-gray-800 text-white">
		<ul class="flex space-x-4 p-4">
			<h1>GoMud</h1>
			{#each links as { name, href }}
				<li>
					<a
						{href}
						class="rounded-md px-3 py-2 transition-colors duration-200
            {$currentPath === href
							? 'bg-gray-400 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="p-8">
		{@render children()}
	</div>
</div>
