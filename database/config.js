module.exports = {
  database: {
    host: process.env.host,
    user: process.env.user,
    port: process.env.dbport,
    passport: process.env.passport,
    database: process.env.database,
  },
  database2: {
    host: "localhost",
    user: "root",
    port: 3306,
    passport: "",
    database: "combi",
  },
};
