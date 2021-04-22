import dayjs from "dayjs";
import { Date } from "types/types";

export const date = (
  store: any = dayjs(),
  action: { type: string; payload: { newDate: Date } }
) => {
  switch (action.type) {
    case "NEXT_DAY":
      const { newDate } = action.payload;
      return newDate;
    default:
      return store;
  }
};
