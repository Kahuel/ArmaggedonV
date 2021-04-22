import { Asteroid } from "types/types";

export const asteroidList = (
  store: Asteroid[] = [],
  action: { type: string; payload: { newAsteroids: Asteroid[] } }
) => {
  switch (action.type) {
    case "UPDATE_ASTEROID_LIST": {
      const { newAsteroids } = action.payload;
      return [...store, ...newAsteroids];
    }
    default:
      return store;
  }
};
