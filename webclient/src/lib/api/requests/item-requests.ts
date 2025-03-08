import type { ItemSpec, ItemTypeInfo } from "../types/item"

export type GetItemsResponse = {
	item_specs: ItemSpec[]
	item_types: ItemTypeInfo[]
}

export class ItemsApi {
	constructor(private fetchFn: typeof fetch) { }

	async getItems(): Promise<GetItemsResponse | Error> {
		const response = await this.fetchFn('/api/items')

		if (response.status !== 200) {
			return new Error('Failed to fetch items')
		}
		const data = await response.json() as GetItemsResponse

		return data
	}
}
