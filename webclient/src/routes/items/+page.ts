import type { PageLoad } from './$types';
import { getClient } from '$lib/api/client';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
	const api = getClient(fetch)

	let items = await api.items.getItems()
	if (items instanceof Error) {
		return error(404, { message: items.message })
	}
	return {
		item_specs: items.item_specs,
		item_types: items.item_types
	}
};
