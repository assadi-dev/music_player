import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useSongsStore } from "@/store/songs.store";
import { Colors } from "@/constants/Colors";
import { TrackObject } from "@/services/songsData";
import TrackPlayer from "react-native-track-player";
import useIsPlaying from "@/hooks/useIsPlaying";
import PlayButton from "../PlayButton";
import * as FileSystem  from 'expo-file-system';
import { Directory, Paths } from "expo-file-system/next";

const FloatingPlayer = () => {
  const router = useRouter();
  const currentSong = useSongsStore.use.selected();
  React.useEffect(()=>{
    if(currentSong){
  
  const intTracks = async()=>{

  /*   const content =  new Directory(Paths.document,"assets")
    console.log(content); */
  console.log('curre', currentSong.url)
    
    const track = {
      id:currentSong.id,
      url: currentSong.url,
      title: currentSong.title,
      artist: currentSong.artist,
      artwork: currentSong.artwork as string,
      duration: currentSong.duration,
    };

    await TrackPlayer.reset()
    await TrackPlayer.add([track])
    await TrackPlayer.play()
 

    
  }
    
    intTracks()
  }
  },[currentSong])

  const handlePress = () => {
    router.navigate("/player");
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={{ flexDirection: "row", flex: 1 }}
      >
       
        <Image style={styles.artWork} source={{
          uri:currentSong?.artwork ?? ""
        }}   />
        <View style={styles.songDetail}>
          <Text style={styles.title}>{currentSong?.title ?? "???"}</Text>
          <Text style={styles.artist}>{currentSong?.artist ?? "??"}</Text>
        </View>
      </TouchableOpacity>
      <PlayButton style={styles.action} />
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 82,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    height: 78,
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  artWork: {
    height: 60,
    width: 60,
    borderRadius: 8,
    backgroundColor: "gray",
  },
  songDetail: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  action: {
    width: 50,
    backgroundColor: "gray",
    borderRadius: 100,
    height: 50,
    alignSelf: "center",
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
  },
  artist: {
    color: Colors.dark.text,
  },
});
