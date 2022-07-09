export const API_ROOT="https://tenor.googleapis.com/v2/";
export const API_KEY="AIzaSyBTtV5QFu7rqgzckuOLvwUqEvKZA3j7Tuo";

export const makeUrl=(slug,limit)=>`${API_ROOT}${slug}?key=${API_KEY}&limit=${limit}`;
