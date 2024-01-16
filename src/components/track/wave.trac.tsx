'ues client'
import { useEffect, useRef } from 'react'
import WaveSurfer from "wavesurfer.js"

const WaveTrack = () => {

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = containerRef.current
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
        <div ref={containerRef}>
            Wave Track
        </div>
    )
}

export default WaveTrack