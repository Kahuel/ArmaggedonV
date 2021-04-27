import React, { useState } from "react";
import { Asteroid } from "types/types";
import "./asteroids.css";
import dayjs from "dayjs";
import { Dino, AsteroidImg } from "assets/img";
import { Link, useHistory } from "react-router-dom";
import { getAsteroidInfo } from "api/api";

interface Props {
  el: Asteroid;
  f: (el: Asteroid) => void;
}

const createViewBox = (size: number) => {
  if (size > 400) {
    return "10 30 50 50";
  }
  if (size > 200) {
    return "0 0 100 100";
  }
  if (size > 100) {
    return "0 -10 150 150";
  }
  return "0 -25 200 200";
};

export const AsteroidCreator: React.FC<Props> = ({ el, f }) => {
  const history = useHistory();

  const className = `asteroidInList ${
    el.is_potentially_hazardous_asteroid ? "dangerous" : ""
  }`;

  const date = dayjs(
    el.close_approach_data[0].close_approach_date,
    "DD MMMM YYYY"
  ).format("DD MMMM YYYY");

  const distance = Math.round(
    Number(el.close_approach_data[0].miss_distance.kilometers)
  );

  const diameter = Math.round(
    (el.estimated_diameter.meters.estimated_diameter_min +
      el.estimated_diameter.meters.estimated_diameter_min) /
      2
  );

  const path = window.location.pathname;

  return (
    <div
      key={el.id}
      className={className}
      onClick={() => {
        history.push(`/main/${el.id}`);
      }}
    >
      <div className={`dinoContainer`}>
        <Dino className={`dino`} />
      </div>
      <div className="asteroidImgContainer">
        <AsteroidImg
          viewBox={createViewBox(diameter)}
          className={`asteroidImg`}
        />
      </div>
      <div className="infoContainer">
        <span>
          <b>{el.name}</b>
        </span>
        <p>{`Дата...........${date}`}</p>
        <p>{`Расстояние.....${distance}km`}</p>
        <p>{`Размер.........${diameter}m`}</p>
      </div>
      <button
        className={`destruction_button`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (f) {
            f(el);
          }
        }}
      >
        {path === "/main" ? "На уничтожение" : "Удалить"}
      </button>
    </div>
  );
};
