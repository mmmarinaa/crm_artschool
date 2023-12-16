import { $authHostSdl } from "./index";

export const fetchSchedule = async () => {
  const { data } = await $authHostSdl.get("/get_schedule");
  console.log("Я тутттттт", data);
  return data;
};
