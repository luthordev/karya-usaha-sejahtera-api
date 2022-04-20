const ip = require("ip");

const config = {
    app: {
      name: "NodeJS API",
      host: `http://${ip.address()}`,
      port: 3000,
      communication: true,
    },
    db: {
      host: "mongodb+srv://luthor:luthfi@28@karyausahasejahtera.wlmj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      database: "karyausahasejahtera",
      username: "",
      password: "",
    },
    apiKey: "karyausahasejahteraa",
  };
  
  module.exports = config;