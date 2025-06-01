"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false, // สำหรับ Railway ต้องเปิด SSL แบบนี้
    },
});
const connectToDb = async () => {
    try {
        const client = await exports.pool.connect();
        console.log('✅ PostgreSQL connected (Railway)');
        client.release();
    }
    catch (err) {
        console.error('❌ Database connection failed', err);
        throw err;
    }
};
exports.connectToDb = connectToDb;
