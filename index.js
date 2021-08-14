import express from "express";
import usersRoutes from "./routes/users.js";
const app = express();

const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", usersRoutes);

app.get("/", (request, response) => response.send("Hello from homepage"));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
