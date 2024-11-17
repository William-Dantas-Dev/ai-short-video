import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL) {
    throw new Error('NEXT_PUBLIC_DRIZZLE_DATABASE_URL environment variable is required.');
}

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);

export const db = drizzle(sql);