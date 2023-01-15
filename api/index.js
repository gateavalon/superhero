import { config as configEnv } from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

configEnv();

const db = [];

export const createApp = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));

  app.post("/superhero", async (req, res) => {
    const { searchName } = req.body;
    const apiUrl = `https://superheroapi.com/api/${process.env.API_TOKEN}/search/${searchName}`;

    try {
      const { data } = await axios.get(apiUrl);
      res.status(200).json(data.results);
    } catch (error) {
      res.status(400).json("Could not get data");
    }
  });

  app.post("/save", async (req, res) => {
    const { powerStats } = req.body;

    try {
      const existingRecord = db.find((item) => item.id === powerStats.id);

      if (existingRecord) {
        db.map(item => {
          if (item.id === powerStats.id) {
            return {
              id: item.id,
              intelligence: powerStats.intelligence,
              strength: powerStats.strength,
              speed: powerStats.speed,
              durability: powerStats.durability,
              power: powerStats.power,
              combat: powerStats.combat,
            };
          }
          return item
        })
      }
      
      db.push(powerStats);
      res.status(200).json("Record updated and saved");
    } catch (error) {
      res.status(400).json("Could not update the data");
    }
  });

  return app;
};

createApp().then((app) => {
  app.listen(process.env.PORT, () => {
    console.log(`API started at http://localhost:${process.env.PORT}`);
  });
});
