import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useIsPlaying from '@/hooks/useIsPlaying'
import TrackPlayer from 'react-native-track-player'

type PlayButton = {
    style:any
}
const PlayButton = ({style}:PlayButton) => {
    const {isPlaying} = useIsPlaying()


  return (
    <>
    {isPlaying ? <TouchableOpacity style={style} onPress={TrackPlayer.play} >
        <Text>Pl</Text>
        </TouchableOpacity>
    :<TouchableOpacity style={style} onPress={TrackPlayer.pause}  >
        <Text>Pa</Text>
    </TouchableOpacity>
    
}
    </>
  )
}

export default PlayButton

const styles = StyleSheet.create({})