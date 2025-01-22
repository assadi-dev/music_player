import { useEffect, useState } from "react"
import TrackPlayer, { State } from "react-native-track-player"

const useIsPlaying = () => {
    const [isPlaying,setPlaying] = useState(false)
    useEffect(() => {
        const initState  = async()=> { const state  =  await TrackPlayer.getState();
           if (state === State.Playing){
            setPlaying(!isPlaying)
           }
        
        }

        initState()
    
    }, [])
    

return {
    isPlaying
}
}

export default useIsPlaying