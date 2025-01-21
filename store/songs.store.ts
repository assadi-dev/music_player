import { SongData, TrackObject } from "@/services/songsData";
import { create } from "zustand";
import { createSelectors } from "./createSelectors";

type SongsStore = {
  collections: TrackObject[] | null;
  selected: TrackObject | null;
};

const songsBase = create<SongsStore>()(() => ({
  collections: [],
  selected: null,
}));

export const useSongsStore = createSelectors(songsBase);

export const setSongsCollection = (payload: any[]) =>
  useSongsStore.setState((state) => ({ ...state, collections: payload }));
export const selectedSongs = (payload: TrackObject) =>
  useSongsStore.setState((state) => ({ ...state, selected: payload }));
