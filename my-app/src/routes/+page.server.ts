import { API_EMOJI_URL } from '$env/static/private';

type Emoji = {
    id: string;
    name: string;
};

export const load = async () => {
    try{
        const response = await fetch(API_EMOJI_URL); //ดึงข้อมูล
        if (!response.ok) {
            throw new Error('Failed to fetch emojis');
        }
        const data: Emoji[] = await response.json(); //แปลงเป็นjson
        const emojis = data;
        return {
            emojis,
            error: null
        };

    } catch(err) {
        return { 
            emojis: [], 
            error: 'Failed to fetch emojis'
        };
    }
};
