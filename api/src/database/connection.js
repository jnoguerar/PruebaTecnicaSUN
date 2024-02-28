import config from "../config/config.js";
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const dbSettings = {
  filename: config.dbServer,
  driver: sqlite3.Database,
};

export async function getConnection() {
  try {
    const db = await open(dbSettings);
    return db;
  } catch (error) {
    console.log("getConnection -> error:", error?.message);
    return false;
  }
}
