import { Image, StyleSheet, Platform, FlatList } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useReducer, useState, useTransition } from "react";
import { getSongs } from "@/services/fetchSongs";
import { setSongsCollection, useSongsStore } from "@/store/songs.store";
import SongsItem from "@/components/SongsItem";

export default function HomeScreen() {
  const [isPending, toggleState] = useReducer((state) => !state, false);
  const songs = useSongsStore.use.collections();

  useEffect(() => {
    toggleState();
    const initSongs = async () => {
      try {
        const result = await getSongs();
        if (result?.length > 0) {
          setSongsCollection(result);
        }
      } finally {
        toggleState();
      }
    };

    initSongs();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={songs}
        renderItem={({ item }) => <SongsItem song={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
