const express = require("express");
const app = express();
const cors = require("cors")

const PORT = 3000;


app.use(cors())

app.use(express.json());



app.get("/", (req, res) => {
  res.send("This is homepage");
});


const router = require("./routes/routes")
app.use("/api/v1", router)

app.use((req, res) => {
  res.status(400).send("Route not found");
});


  app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
  });

