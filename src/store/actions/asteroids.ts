import { Asteroid } from "types/types";

export const addAsteroidToDestructionList = (asteroid: Asteroid) => {
  return {
    type: "ADD_TO_LIST",
    payload: { asteroid },
  };
};

export const deleteAsteroidFromDestructionList = (asteroid: Asteroid) => {
  return {
    type: "DELETE_FROM_LIST",
    payload: { asteroid },
  };
};

export const updateAsteroidList = (newAsteroids: Asteroid[]) => {
  return {
    type: "UPDATE_ASTEROID_LIST",
    payload: { newAsteroids },
  };
};
