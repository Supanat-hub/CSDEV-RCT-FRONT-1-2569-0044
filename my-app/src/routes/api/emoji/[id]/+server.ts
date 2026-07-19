import { API_EMOJI_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function GET({ params, fetch }) {
    const id = params.id;

    try {
        const response = await fetch(`${API_EMOJI_URL}/${id}`);

        if (!response.ok) {
            throw error(404, 'Not found emoji');
        }
        const sourceCache = response.headers.get('cache-control') || 'public, max-age=604800';
        return new Response(await response.blob(), {
            headers: {
                'Content-Type': response.headers.get('content-type') || 'image/png',
                'Cache-Control': sourceCache
            }
        });

    } catch (err) {
        throw error(500, 'Fail to fetch');
    }
}