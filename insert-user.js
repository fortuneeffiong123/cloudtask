const db = require('./db');

async function insertUser() {
  try {
    const [result] = await db.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      ['Fortune Effiong', 'fortuneeffiong123@gmail.com']
    );

    console.log('✅ User inserted with ID:', result.insertId);
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

insertUser();