import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades/', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json('gradeId must be a positive integer');
      return;
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json(`Cannot find grade with gradeId ${gradeId}`);
      return;
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      res.status(400).json('Name field is requied');
      return;
    }
    if (!course) {
      res.status(400).json('Course field is required');
      return;
    }
    if (!score || isNaN(score) || score <= 0) {
      res.status(400).json('Score must be a number from 0 to 100');
      return;
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (error) {
    next(error);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json('gradeId must be a positive integer');
      return;
    }
    if (!name) {
      res.status(400).json('Name field is requied');
      return;
    }
    if (!course) {
      res.status(400).json('Course field is required');
      return;
    }
    if (!score || isNaN(score) || score <= 0) {
      res.status(400).json('Score must be a number from 0 to 100');
      return;
    }
    const sql = `
    update "grades"
    set "name" = $1,
    "course" = $2,
    "score" = $3
    where "gradeId" = $4
    returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json(`Cannot find grade with gradeId ${gradeId}`);
      return;
    }
    res.status(200).json(grade);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json('gradeId must be a positive integer');
      return;
    }
    const sql = `
    delete 
    from "grades"
    where "gradeId" = $1
    returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json(`Cannot find grade with gradeId ${gradeId}`);
      return;
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
