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
    "postgres://wqsfdymiftkmzh:d3b32aa51e43ba058362b8edf0ec887488dc4d75eabcfcfbc156d7d08b407ef1@ec2-52-208-221-89.eu-west-1.compute.amazonaws.com:5432/d96v7m6ddjcfb4",
  ssl: process.env.DATABASE_URL ? true : false,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function query(text, params) {
  return pool.query(text, params);
}
