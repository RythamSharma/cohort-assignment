const express = require("express");
const todo = require("./db");
const cors= require('cors')
const app = express();
const port = 3000;
const { todoSchema, updatetodo } = require("./types");
app.use(express.json());

app.use(cors())

app.post("/addtodos", async function (req, res) {
  const body = req.body;
  console.log(body);
  const result = todoSchema.safeParse(body);
  if (!result.success) {
    res.send("wrong inputs");
  }
  const newtodo = new todo({
    title: body.title,
    description: body.description,
    done: false,
  });
  console.log("here");
  await newtodo.save();
  res.send("success");
});

app.get("/gettodos", async function (req, res) {
  const todos = await todo.find({});
  res.send(todos);
});
app.put("/updatetodos", async function (req, res) {
  const body = req.body;
  const parsed = updatetodo.safeParse(body);
  if (!parsed.success) {
    res.send("error");
  }
  await todo.updateOne(
    {_id: body.id,}
    ,
    {done: true,}
  );
  res.send("successfully completed todo");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
