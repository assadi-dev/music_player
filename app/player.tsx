import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useSongsStore } from "@/store/songs.store";

const DissmissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets();

  const dissmissPlayerStyle: StyleProp<ViewStyle> = {
    position: "absolute",
    top: top + 8,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  };

  return (
    <View style={dissmissPlayerStyle}>
      <View
        accessible={false}
        style={{
          width: 50,
          height: 8,
          borderRadius: 10,
          backgroundColor: "#fff",
          opacity: 0.7,
        }}
      ></View>
    </View>
  );
};

const PlayerScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const activeTrack = useSongsStore.use.selected();
  return (
    <View style={styles.overlayContainer}>
      <DissmissPlayerSymbol />
      <View
        style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}
      >
      <View style={styles.artWorkContainer}>
        <Image
          style={styles.artWorkImage}
          source={{
            uri: activeTrack?.artwork ?? "",
          }}
        />
      </View>
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",

    paddingHorizontal: 18,
  },
  artWorkContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    justifyContent: "center",
    flexDirection: "row",
    height: "45%",
  },
  artWorkImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
});
