const ip = require("ip");

const config = {
    app: {
      name: "NodeJS API",
      host: `http://${ip.address()}`,
      port: 3001,
      communication: true,
    },
    db: {
      host: "mongodb://localhost:27017",
      database: "db_karyausahasejahtera",
      username: "",
      password: "",
    },
    apiKey: "karyausahasejahteraa",
  };
  
  module.exports = config;