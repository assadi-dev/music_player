import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TrackObject } from "@/services/songsData";
import { setActiveQueueId } from "@/store/queue.store";
import { selectedSongs } from "@/store/songs.store";

type SongsItemProps = { song: TrackObject };
const SongsItem = ({ song }: SongsItemProps) => {
  const handlePress = () => {
    setActiveQueueId(song.id);
    selectedSongs(song);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
           <Image style={styles.artWorkColumn} source={{
                  uri:song?.artwork ?? ""
             }} />
        <View>
          <Text style={styles.songTitle}>{song.title}</Text>
          <Text>{song.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongsItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 8,
    gap: 8,
    alignItems: "center",
  },
  artWorkColumn: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "gray",
    boxShadow: "1px 1x 5px 10px rgba(0,0,0,0.25)",
  },
  detailColumn: {},
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
