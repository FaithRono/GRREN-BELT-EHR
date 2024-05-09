import express from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db/connection.js';

const router = express.Router();

router.get("/:collection", async (req, res) => {
  const coll = getDb().collection(req.params.collection);
  try {
    const results = await coll.find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    console.error(`Error retrieving records from ${req.params.collection}: ${err}`);
    res.status(500).send(`Error retrieving records from ${req.params.collection}`);
  }
});

router.post("/:collection", async (req, res) => {
  const coll = getDb().collection(req.params.collection);
  try {
    const result = await coll.insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error(`Error adding record to ${req.params.collection}: ${err}`);
    res.status(500).send(`Error adding record to ${req.params.collection}`);
  }
});

router.patch("/:collection/:id", async (req, res) => {
  const coll = getDb().collection(req.params.collection);
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = { $set: req.body };
    const result = await coll.updateOne(query, updates);
    if (result.matchedCount === 0) {
      res.status(404).send(`Record not found in ${req.params.collection}`);
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    console.error(`Error updating record in ${req.params.collection}: ${err}`);
    res.status(500).send(`Error updating record in ${req.params.collection}`);
  }
});

router.delete("/:collection/:id", async (req, res) => {
  const coll = getDb().collection(req.params.collection);
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const result = await coll.deleteOne(query);
    if (result.deletedCount === 0) {
      res.status(404).send(`Record not found in ${req.params.collection}`);
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.error(`Error deleting record in ${req.params.collection}: ${err}`);
    res.status(500).send(`Error deleting record in ${req.params.collection}`);
  }
});

export default router;
