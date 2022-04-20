const ip = require("ip");

const config = {
    app: {
      name: "NodeJS API",
      host: `http://${ip.address()}`,
      port: 3000,
      communication: true,
    },
    db: {
      host: "mongodb+srv://karyausahasejahtera.wlmj3.mongodb.net",
      database: "karyausahasejahtera",
      username: "luthor",
      password: "luthfi@28",
    },
    apiKey: "karyausahasejahteraa",
  };
  
  module.exports = config;