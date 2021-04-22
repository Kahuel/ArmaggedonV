import { Asteroid } from "types/types";

export const destructionList = (
  store: Asteroid[] = [],
  action: { type: string; payload: { asteroid: Asteroid } }
) => {
  switch (action.type) {
    case "ADD_TO_LIST": {
      const { asteroid } = action.payload;
      if (store.includes(asteroid)) {
        return store;
      }
      return [...store, asteroid];
    }
    case "DELETE_FROM_LIST": {
      const { id } = action.payload.asteroid;
      return store.filter((el: Asteroid) => el.id !== id);
    }
    default:
      return store;
  }
};
