import { Asteroid, CloseApproach } from "types/types";

export const asteroidList = (
  store: Asteroid[] = [],
  action: {
    type: string;
    payload: {
      newAsteroids: Asteroid[];
      closeApproachData?: CloseApproach;
      id?: string;
    };
  }
) => {
  switch (action.type) {
    case "UPDATE_ASTEROID_LIST": {
      const { newAsteroids } = action.payload;
      return [...store, ...newAsteroids];
    }
    case "UPDATE_CLOSE_APPROACH_DATA": {
      const { closeApproachData, id } = action.payload;
      return store.map((element) =>
        element.id === id
          ? { ...element, close_approach_data: closeApproachData }
          : element
      );
    }
    default:
      return store;
  }
};
