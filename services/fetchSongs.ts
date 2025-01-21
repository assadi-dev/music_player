import { wait } from "@/utils/time.utils";
import { songsData } from "./songsData";

export const getSongs = async () => {
  try {
    await wait(1000);
    return songsData;
  } catch (error) {
    return [];
  }
};
