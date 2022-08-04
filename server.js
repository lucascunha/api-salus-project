const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Fazendo o parse do content-type - application/json
app.use(express.json());

// Parse das requests de content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Rota básica, no caso de chamar a rota /
app.get("/", (req, res) => {
  res.json({ message: "REST API para cadastrar e consultar unidades de saúde do projeto salus." });
});

require("./app/routes/routes.js")(app);

// Configura a porta para escutar as requsts
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
