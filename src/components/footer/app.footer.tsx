'use client'
import { useHasMounted } from '@/utlis/customHook';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function AppFooter() {

    const hasMounted = useHasMounted()
    if (!hasMounted) return (<></>)

    return (
        <AppBar
            position="fixed"
            sx={{
                top: 'auto',
                bottom: 0,
                background: '#f2f2f2'
            }}
        >
            <Container sx={{ display: 'flex', gap: 10 }}>
                <AudioPlayer
                    src={'http://localhost:8000/tracks/hoidanit.mp3'}
                    volume={0.5}
                    style={{
                        boxShadow: 'unset',
                        background: '#f2f2f2'
                    }}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'center',
                    minWidth: 100
                }}>
                    <div style={{ color: '#ccc'}}>Eric</div>
                    <div style={{ color: '#000000'}}>Who am I ?</div>
                </div>
            </Container>
        </AppBar>
    );
}