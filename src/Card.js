import React, { useState } from "react";
import axios from "axios";

const Card = ({ item, setMessage }) => {
  const [powerStats, setPowerStats] = useState({
    id: item.id,
    intelligence: item.powerstats.intelligence,
    strength: item.powerstats.strength,
    speed: item.powerstats.speed,
    durability: item.powerstats.durability,
    power: item.powerstats.power,
    combat: item.powerstats.combat,
  });

  const handleChangeStats = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/save", {
        powerStats,
      });
      console.log('data', data);
      setMessage(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>
        <strong>Name: {item.name}</strong>
      </div>
      <img alt="" src={item.image.url} />
      <div>
        <strong>Power Stats</strong>
        <div>
          <div>
            <span>intelligence: {item.powerstats.intelligence}</span>
            <input
              style={{
                width: "1.5rem",
                borderStyle: "solid",
                marginLeft: "0.5rem",
              }}
              onChange={(e) => {
                setPowerStats((pre) => {
                  return { ...pre, intelligence: e.target.value };
                });
              }}
            ></input>
          </div>
          <div>
            <span>strength: {item.powerstats.strength}</span>
            <input
              style={{
                width: "1.5rem",
                borderStyle: "solid",
                marginLeft: "0.5rem",
              }}
              onChange={(e) => {
                setPowerStats((pre) => {
                  return { ...pre, strength: e.target.value };
                });
              }}
            ></input>
          </div>
          <div>
            <span>speed: {item.powerstats.speed}</span>
            <input
              style={{
                width: "1.5rem",
                borderStyle: "solid",
                marginLeft: "0.5rem",
              }}
              onChange={(e) => {
                setPowerStats((pre) => {
                  return { ...pre, speed: e.target.value };
                });
              }}
            ></input>
          </div>
          <div>
            <span>durability: {item.powerstats.durability}</span>
            <input
              style={{
                width: "1.5rem",
                borderStyle: "solid",
                marginLeft: "0.5rem",
              }}
              onChange={(e) => {
                setPowerStats((pre) => {
                  return { ...pre, durability: e.target.value };
                });
              }}
            ></input>
          </div>
          <div>
            <span>power: {item.powerstats.power}</span>
            <input
              style={{
                width: "1.5rem",
                borderStyle: "solid",
                marginLeft: "0.5rem",
              }}
              onChange={(e) => {
                setPowerStats((pre) => {
                  return { ...pre, power: e.target.value };
                });
              }}
            ></input>
          </div>
          <div>
            <span>combat: {item.powerstats.combat}</span>
            <input
              style={{
                width: "1.5rem",
                borderStyle: "solid",
                marginLeft: "0.5rem",
              }}
              onChange={(e) => {
                setPowerStats((pre) => {
                  return { ...pre, combat: e.target.value };
                });
              }}
            ></input>
          </div>
        </div>
      </div>
      <button onClick={handleChangeStats}>Save Changes</button>
    </div>
  );
};

export default Card;
