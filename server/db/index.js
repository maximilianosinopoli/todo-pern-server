import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  host: config.databaseHost,
  database: config.databaseName,
  user: config.username,
  port: config.dbPort,
  password: config.password,
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://kmcwoybzpsdgnj:3a0c89e0c2eafb93625cc954a7565ef0231d7622c470460dfacd14fe54cec216@ec2-3-211-240-42.compute-1.amazonaws.com:5432/d9fddsjjpbg9ur",
  ssl: process.env.DATABASE_URL ? true : false,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function query(text, params) {
  return pool.query(text, params);
}
