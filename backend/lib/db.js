import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      await tempConnection.query(
        `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\` 
         CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
      );
      await tempConnection.end();

      // Connect to the database
      connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        charset: "utf8mb4",
      });

      // Create tables
      await createTables();
      console.log("Database initialized successfully");
    }
    return connection;
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;
  }
};

async function createTables() {
  // Updated users table with firstName/lastName
  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      artisanId VARCHAR(50) UNIQUE,
      PhoneNumber VARCHAR(20) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      specialization VARCHAR(255) DEFAULT NULL,
      profileImage VARCHAR(255) DEFAULT NULL,
      listed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_artisanId (artisanId),
      INDEX idx_listed (listed)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);

  // Products table (unchanged)
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
      certification VARCHAR(255) DEFAULT NULL,
      finish VARCHAR(255) DEFAULT NULL,
      closureType VARCHAR(255) DEFAULT NULL,
      image1 VARCHAR(255),
      image2 VARCHAR(255),
      image3 VARCHAR(255),
      image4 VARCHAR(255),
      image5 VARCHAR(255),
      productDescription TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      is_listed BOOLEAN NOT NULL DEFAULT FALSE,
      listed_at DATETIME DEFAULT NULL,
      FOREIGN KEY (artisanId) REFERENCES users(artisanId) ON DELETE CASCADE,
      INDEX idx_artisanId (artisanId),
      INDEX idx_is_listed (is_listed),
      FULLTEXT INDEX ft_product_search (productName, productDescription, material)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);

  // Feedback table (unchanged)
  await connection.query(`
    CREATE TABLE IF NOT EXISTS feedback (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_read BOOLEAN DEFAULT FALSE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);

  // Add default data if tables are empty
  await addDefaultData();
}

async function addDefaultData() {
  // Updated admin user with firstName/lastName
  const [users] = await connection.query('SELECT COUNT(*) as count FROM users');
  if (users[0].count === 0) {
    await connection.query(`
      INSERT INTO users (firstName, lastName, artisanId, PhoneNumber, password, listed)
      VALUES ('Admin', 'User', 'ADMIN001', '1234567890', '$2b$10$defaultpasswordhash', TRUE)
    `);
    console.log('Default admin user created');
  }

  // Products (unchanged)
  const [products] = await connection.query('SELECT COUNT(*) as count FROM products');
  if (products[0].count === 0) {
    await connection.query(`
      INSERT INTO products (artisanId, productName, productPrice, productDescription, is_listed)
      VALUES 
        ('ADMIN001', 'Sample Product 1', 19.99, 'This is a sample product description', TRUE),
        ('ADMIN001', 'Sample Product 2', 29.99, 'Another sample product description', TRUE)
    `);
    console.log('Default products created');
  }
}

// Handle connection errors
process.on("unhandledRejection", (err) => {
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("Database connection was closed. Reconnecting...");
    connection = null;
  } else {
    console.error("Unhandled database error:", err);
  }
});
