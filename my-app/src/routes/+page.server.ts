import { API_EMOJI_URL } from '$env/static/private';

type Emoji = {
    id: string;
    name: string;
};

function isEmoji(value: unknown): value is Emoji {
    return (
        typeof value === 'object' &&
        value !== null &&
        'id' in value &&
        typeof value.id === 'string' &&
        'name' in value &&
        typeof value.name === 'string'
    );
}

export const load = async () => {
    const response = await fetch(API_EMOJI_URL); //ดึงข้อมูล
    const data: unknown = await response.json(); //แปลงเป็นjson
    const emojis = Array.isArray(data) ? data.filter(isEmoji) : [];
    
    return {
        emojis
    };
};