const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/tasks
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    let query = 'SELECT * FROM tasks';
    let params = [];
    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }
    const [tasks] = await db.query(query, params);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tasks
router.post('/', async (req, res) => {
  try {
    const { project_id, user_id, title, description, status, due_date } = req.body;
    const [result] = await db.query(
      'INSERT INTO tasks (project_id, user_id, title, description, status, due_date) VALUES (?, ?, ?, ?, ?, ?)',
      [project_id, user_id, title, description, status || 'todo', due_date || null]
    );
    res.status(201).json({ id: result.insertId, message: 'Task created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tasks/:id
router.get('/:id', async (req, res) => {
  try {
    const [tasks] = await db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    if (tasks.length === 0) return res.status(404).json({ error: 'Task not found' });
    res.json(tasks[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
  try {
    const { title, status, user_id } = req.body;
    const [result] = await db.query(
      'UPDATE tasks SET title = ?, status = ?, user_id = ? WHERE id = ?',
      [title, status, user_id, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;