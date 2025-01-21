import { useEffect, useRef } from "react";
import TrackPlayer, { RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 20,
  });
  await TrackPlayer.setVolume(0.05);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
  const isInitialized = useRef(false);
  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitialized.current = true;
        onLoad?.();
      })
      .catch((error) => {
        console.error("Error setting up TrackPlayer");
        if (error instanceof Error) {
          console.error(error.message);
        }
      });
  }, [onLoad]);
};
