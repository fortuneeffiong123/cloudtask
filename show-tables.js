const db = require('./db');

async function showTables() {
  try {
    const [rows] = await db.query('SHOW TABLES');
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
}

showTables();