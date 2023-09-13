import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

async function readDataJson() {
  return JSON.parse(await readFile('./data.json', 'utf8'));
}

async function writeDataJson(data) {
  await writeFile('./data.json', JSON.stringify(data, null, 2));
}

app.get('/api/notes', async (req, res) => {
  try {
    const jsonData = await readDataJson();
    console.log(req.method);
    const array = [];
    for (const key in jsonData.notes) {
      array.push(jsonData.notes[key]);
    }
    res.status(200).json(array);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readDataJson();
    console.log(req.method);
    const id = Number(req.params.id);
    if (id < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (!jsonData.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.status(200).json(jsonData.notes[id]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const jsonData = await readDataJson();
    console.log(req.method);
    const { content } = req.body;
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    const newNote = { id: jsonData.nextId, content };
    jsonData.notes[newNote.id] = newNote;
    jsonData.nextId++;
    await writeDataJson(jsonData);
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readDataJson();
    console.log(req.method);
    const id = Number(req.params.id);
    if (id < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (jsonData.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete jsonData.notes[id];
    await writeDataJson(jsonData);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const jsonData = await readDataJson();
    console.log(req.method);
    const id = Number(req.params.id);
    const { content } = req.body;
    if (id < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    if (jsonData.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    const note = { id, content };
    jsonData.notes[note.id] = note;
    await writeDataJson(jsonData);
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
