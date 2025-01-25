import { PlaybackService } from "@/services/PlaybackServices";
import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RatingType, RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {

  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 20,
    
  });
  await TrackPlayer.updateOptions({
		ratingType: RatingType.Heart,
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
			Capability.Stop,
		],

	})
  await TrackPlayer.setVolume(17);
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
