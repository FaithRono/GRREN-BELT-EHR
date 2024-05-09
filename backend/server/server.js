import express from "express";
import cors from "cors";
import records from "./routes/records.js";

const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use(express.json());
app.use("/record", records);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
