import { $authHost } from "./index";

export const fetchClasses = async () => {
  const { data } = await $authHost.get("api/journal");
  return data;
};

export const fetchOneClass = async (id) => {
  const { data } = await $authHost.get("api/journal/" + id);
  return data;
};
