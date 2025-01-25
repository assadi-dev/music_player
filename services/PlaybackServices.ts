import TrackPlayer, { Event, useTrackPlayerEvents } from 'react-native-track-player';

export const PlaybackService = async function() {


    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause()); 
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>TrackPlayer.skipToNext())
    TrackPlayer.addEventListener(Event.RemoteNext,()=>TrackPlayer.skipToPrevious())
    TrackPlayer.addEventListener(Event.PlaybackError,(event)=>{
        console.warn('An error occurred: ', event)
    })
    TrackPlayer.addEventListener(Event.PlaybackState,(event)=>{
        console.log('Playback state: ', event.state)
    })
    TrackPlayer.addEventListener(Event.PlaybackTrackChanged,(event)=>{
        console.log('Track changed', event.position)
    })
   

   
    

};

