import { Request, Response } from 'express'
import { pool } from '../config/db'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT users.id, users.username, users.status, roles.name AS role_name
      FROM users
      LEFT JOIN roles ON users.role_id = roles.id
    `)
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
