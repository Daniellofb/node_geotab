module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "gigabyte",
    DB: "public",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };