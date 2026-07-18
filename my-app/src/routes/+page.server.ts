import { API_EMOJI_URL } from '$env/static/private';

export const load = async () => {
    const response = await fetch(API_EMOJI_URL); //ดึงข้อมูล
    const data = await response.json(); //แปลงเป็นjson
    
    return {
        emojis: data
    };
};