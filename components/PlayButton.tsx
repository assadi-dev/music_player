import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import useIsPlaying from "@/hooks/useIsPlaying";
import TrackPlayer, { Event, State, useTrackPlayerEvents } from "react-native-track-player";

type PlayButton = {
  style: any;
};
const PlayButton = ({ style }: PlayButton) => {
    const [playerState, setPlayerState] = useState<State>()
    const events = [
        Event.PlaybackState,
        Event.PlaybackError,
      ];

    useTrackPlayerEvents(events, (event) => {
   
      if (event.type === Event.PlaybackState) {
        setPlayerState(event.state);
      }
    });

  const playSong = async () => {
    const track = await TrackPlayer.getState();
    console.log(`state: ${track}`);
    const duration = await TrackPlayer.getDuration();
    console.log(`Duration: ${duration}`);
    await TrackPlayer.play();
  };
  const pauseSong = async () => {
    const duration = await TrackPlayer.getDuration();
    console.log(`Duration: ${duration}`);
    await TrackPlayer.pause();
  };

  return (
    <>
      {playerState === State.Playing ? (
        <TouchableOpacity style={style} onPress={pauseSong}>
          <Text>Pa</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style} onPress={playSong}>
          <Text>Pl</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default PlayButton;

const styles = StyleSheet.create({});
