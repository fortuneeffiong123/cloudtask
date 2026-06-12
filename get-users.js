const db = require('./db');

async function getUsers() {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
}

getUsers();