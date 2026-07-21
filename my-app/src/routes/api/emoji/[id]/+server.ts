import { API_EMOJI_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function GET({ params, fetch }) {
    const id = params.id;

    try {
        const response = await fetch(`${API_EMOJI_URL}/${id}`);

        if (!response.ok) {
            throw error(404, 'Not found emoji');
        }

        const blob = await response.blob();
        const contentType =
            response.headers.get('content-type')?.split(';')[0].trim() ||
            blob.type || 'image/png';
        const sourceCache = response.headers.get('cache-control') || 'public, max-age=604800';

        return new Response(blob, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': sourceCache
            }
        });

    } catch (err) {
        throw error(500, 'Fail to fetch');
    }
}