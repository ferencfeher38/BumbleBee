import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "bumblebee" && password === "IloveHon3y") {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(403).json({ error: "unauthorized" });
  }
});

app.post("/api/order", (req, res) => {
  const { mézek } = req.body;
  console.log("Sikeres megrendelés:");
  console.log(mézek);
  res.status(200).json({ status: "order successful" });
});

app.listen(port, () => {
  console.log(`A szerver fut a ${port} porton.`);
});
