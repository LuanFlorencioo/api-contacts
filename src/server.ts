import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

const initServer = () => {
  console.log("~~~ Database is connected ~~~");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server is running on ${PORT} 🎉`));
}

AppDataSource.initialize()
  .then(initServer)
  .catch((error) => console.log(error));
