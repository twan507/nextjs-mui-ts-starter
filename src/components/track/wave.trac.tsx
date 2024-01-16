'ues client'
import { useEffect } from 'react'
import WaveSurfer from "wavesurfer.js"

const WaveTrack = () => {

    useEffect(() => {
        const element = document.getElementById('hoidanit')
        if (element) {
            const wavesurfer = WaveSurfer.create({
                container: element,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: '/audio/hoidanit.mp3',
            })
        }
    }, [])

    return (
        <div id='hoidanit'>
            Wave Track
        </div>
    )
}

export default WaveTrack