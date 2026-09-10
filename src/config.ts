import 'dotenv/config';
const config = {
    port: Number(process.env.PORT),
    host: process.env.HOST,
    databaseUrl: process.env.DATABASE_URL,
};

export default config;