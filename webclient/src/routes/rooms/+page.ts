import type { PageLoad } from './$types';


export type ZoneDetail = {
    ZoneName: string
    RoomCount: number
    AutoScale: string
}
export const load: PageLoad = async ({ fetch }) => {
    const req = await fetch('/api/zones');

    const zones = await req.json() as ZoneDetail[];

    return {
        zones: zones
    };
};
