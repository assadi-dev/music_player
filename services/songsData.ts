
import { File } from "expo-file-system/next";
const IP = `http://10.192.5.51:8888`
const PATH_URL = 'medias'
const HTTP_URL = `${IP}/${PATH_URL}/`

export type SongData = {
  id: number;
  songName: string;
  artistName: string;
  albumName: string;
  albumArtImagePath: string;
  audioPath: string;
  duration: number;
};


export type TrackObject = {
  id: number;
  url: string;
  title: string;
  artist: string;
  album: string;
  artwork: string | null;
  duration: number;
};
export const songsData: TrackObject[] = [
  {
    id: 100,
    title: "Dynasties & Dystopia",
    artist: "Denzel Curry, Gizzle, Bren Joy",
    album: "Arcane League Of Legends",
    url: HTTP_URL+"assets/audios/audio_1.mp3",
    artwork: HTTP_URL+"assets/images/cover.jpg",
    duration: 178,
  },

  {
    id: 101,
    title: "Playground (Baby Tate Remix) ",
    artist: "Bea Miller",
    album: "Arcane League Of Legends",
    url:  HTTP_URL+"assets/audios/audio_2.mp3" ,
    artwork: HTTP_URL+"assets/images/cover.jpg",
    duration: 151,
  },

  {
    id: 102,
    title: "Come Play",
    artist: "Stray Kids, Young Miko, Tom Morello",
    album: "Arcane League Of Legends",
    url: HTTP_URL + "assets/audios/audio_3.mp3" ,
    artwork: HTTP_URL + "assets/images/cover.jpg",
    duration: 162,
  },

  {
    id: 103,
    title: "To Ashes and Blood",
    artist: "Woodkid",
    album: "Arcane League Of Legends",
    url: HTTP_URL + "assets/audios/audio_4.mp3",
    artwork: HTTP_URL + "assets/images/cover.jpg",
    duration: 246,
  },
];
