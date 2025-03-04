<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Zones</h1>
<pre>
	{JSON.stringify(data.zones, null, 2)}
</pre>
