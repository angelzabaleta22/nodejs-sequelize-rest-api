import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    //Arranco mi base de datos y luego el servidor
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("Server listening on port", 3000);
  } catch (error) {
    console.error("Unable to connect to the database server", error);
  }
}
main();
