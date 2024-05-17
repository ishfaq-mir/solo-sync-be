const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3307),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "root"),
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL", false), // For self-signed certificates
      // },
    },
    debug: false,
  },
});
