import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // สำหรับ Railway ต้องเปิด SSL แบบนี้
  },
})

export const connectToDb = async () => {
  try {
    const client = await pool.connect()
    console.log('✅ PostgreSQL connected (Railway)')
    client.release()
  } catch (err) {
    console.error('❌ Database connection failed', err)
    throw err
  }
}

