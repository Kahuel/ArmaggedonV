import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AsteroidCreator } from "./AsteroidCreator";
import { asteroidActions, dateActions } from "store/actions";
import { Asteroid } from "types/types";
import { getAsteroids } from "api/api";
import "./asteroids.css";

export const Asteroids: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((store: any) => store.asteroidList);
  const date = useSelector((store: any) => store.date);
  console.log(list);

  const updateList = async () => {
    const formatedDate = date.format("YYYY-MM-DD");
    const response = await getAsteroids(formatedDate);
    const newList = response.data.near_earth_objects[formatedDate];
    console.log(response.data);
    if (newList) {
      dispatch(asteroidActions.updateAsteroidList(newList));
    }
    dispatch(dateActions.nextDay(date.add(1, "day")));
  };

  const handleScroll = (event: any) => {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      updateList();
    }
  };

  const handleClick = (el: Asteroid) => {
    dispatch(asteroidActions.addAsteroidToDestructionList(el));
  };

  if (list.length === 0) {
    updateList();
  }

  return (
    <div onScroll={handleScroll} className="asteroidsList">
      {list.map((el: Asteroid) => (
        <AsteroidCreator key={el.id} el={el} f={handleClick} />
      ))}
    </div>
  );
};
