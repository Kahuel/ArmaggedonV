import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Asteroid } from "types/types";
import { AsteroidCreator } from "pages/Main/AsteroidCreator";
import { asteroidActions } from "store/actions";

export const Destruction = () => {
  const asteroidToDestruction = useSelector(
    (store: any) => store.destructionList
  );

  const dispatch = useDispatch();

  const handleClick = (el: Asteroid) => {
    dispatch(asteroidActions.deleteAsteroidFromDestructionList(el));
  };

  return (
    <div className="asteroidsList">
      {asteroidToDestruction.map((el: Asteroid) => (
        <AsteroidCreator key={el.id} el={el} f={handleClick} />
      ))}
    </div>
  );
};
