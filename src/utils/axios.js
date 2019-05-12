const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost/api",
  withCredentials: JSON.parse(process.env.VUE_APP_RELEASE || "false")
});
module.exports = instance;
