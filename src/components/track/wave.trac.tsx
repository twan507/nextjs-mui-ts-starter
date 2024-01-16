'ues client'
import { useEffect, useRef } from 'react'
import WaveSurfer from "wavesurfer.js"
import { useSearchParams } from "next/navigation"


const WaveTrack = () => {

    const searchParams = useSearchParams()
    const fileName = searchParams.get('audio')

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = containerRef.current
        if (element) {
            const wavesurfer = WaveSurfer.create({
                container: element,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: `/api?audio=${fileName}`,
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