import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res): any => {
  return res.json({
    message: "Hello user",
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
