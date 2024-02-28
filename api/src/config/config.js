import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbServer: process.env.DB_SERVER || "",
};
