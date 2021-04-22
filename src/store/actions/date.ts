export const nextDay = (newDate: any) => ({
  type: "NEXT_DAY",
  payload: {
    newDate,
  },
});
