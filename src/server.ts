import {buildApp} from './app.js';

const app = buildApp();

const start = async () => {
    try {
        await app.listen({
            port: 3000,
            host: '0.0.0.0'
        });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

const shutdown = async (signal: string) => {
    app.log.info(`Received ${signal}, shutting down...`);
    await app.close();
    process.exit(0);
};
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

start();