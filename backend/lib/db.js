// /backend/lib/db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let connection;

export const connectToDatabase = async () => {
  try {
    if (!connection) {
      // Connect without database first
      const tempConnection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      });

      // Create database if not exists
      await tempConnection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
      await tempConnection.end();

      // Now connect to the actual database
      connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      // Create users table if not exists
      await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          artisanId VARCHAR(50) UNIQUE,
          PhoneNumber VARCHAR(20) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      // Create products table if not exists
      await connection.query(`
        CREATE TABLE IF NOT EXISTS products (
          id INT AUTO_INCREMENT PRIMARY KEY,
          artisanId VARCHAR(50) NOT NULL,
          productName VARCHAR(255) NOT NULL,
          productPrice DECIMAL(10,2),
          material VARCHAR(255),
          height VARCHAR(50),
          width VARCHAR(50),
          weight VARCHAR(50),
          image1 VARCHAR(2083),
          image2 VARCHAR(2083),
          image3 VARCHAR(2083),
          image4 VARCHAR(2083),
          image5 VARCHAR(2083),
          productDescription TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (artisanId) REFERENCES users(artisanId)
        )
      `);
    }
    return connection;
  } catch (err) {
    console.log(err);
  }
};
