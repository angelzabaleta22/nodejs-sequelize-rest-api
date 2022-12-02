import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb",
  "postgres",
  "ALIA221329zt@",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
