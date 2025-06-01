"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const db_1 = require("../config/db");
const getUsers = async (req, res) => {
    try {
        const result = await db_1.pool.query(`
      SELECT users.id, users.username, users.password, users.status, roles.name AS role_name
      FROM users
      LEFT JOIN roles ON users.role_id = roles.id
    `);
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getUsers = getUsers;
