// Update with your config settings.

module.exports = {
    [process.env.NODE_ENV]: {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST || "127.0.0.1",
            user: process.env.DB_USERNAME || "root",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_DATABASE || "db_dompetku",
        },
        debug: true,
        migrations: {
            directory: __dirname + "/db/migrations",
        },
        seeds: {
            directory: __dirname + "/db/seeds/test",
        },
    },

};
