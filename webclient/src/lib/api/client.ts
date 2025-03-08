import { ItemsApi } from "./requests/item-requests";

let client: ApiClient | null = null

export class ApiClient {
	public items: ItemsApi

	constructor(fetchFn: typeof fetch) {
		this.items = new ItemsApi(fetchFn)
	}
}



export function getClient(fetchFn: typeof fetch): ApiClient {
	if (!client) {
		client = new ApiClient(fetchFn)
	}
	return client
}
