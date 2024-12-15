import { createClient, RedisClientType } from 'redis';

class RedisCache {
    private client: RedisClientType;
    private static instance: RedisCache;

    constructor() {
        this.client = createClient();
        this.client.on('error', (err) => console.error('Redis Client Error', err));
        this.client.connect();
      
    }

    public static getInstance(): RedisCache {
        if (!RedisCache.instance) {
            RedisCache.instance = new RedisCache();
        }
        return RedisCache.instance;
    }

    async set(sourctText: string, tarLang:string, value: string): Promise<void> {
        await this.client.set(`${sourctText}:${tarLang}`, value);
    }

    async get(key: string): Promise<string | null> {
        return await this.client.get(key);
    }

    async del(key: string): Promise<void> {
        await this.client.del(key);
    }

    async disconnect(): Promise<void> {
        await this.client.disconnect();
    }
}

export default RedisCache;