import { create } from "zustand";
import { createSelectors } from "./createSelectors";

type QueueType = {
  activeQueueId: number | string | null;
};

const queueBase = create<QueueType>()(() => ({
  activeQueueId: null,
}));

export const useQueueStore = createSelectors(queueBase);

export const setActiveQueueId = (value: string | number) =>
  useQueueStore.setState((state) => ({ ...state, activeQueueId: value }));

export const clearQueue = useQueueStore.setState((state) => ({
  ...state,
  activeQueueId: null,
}));
