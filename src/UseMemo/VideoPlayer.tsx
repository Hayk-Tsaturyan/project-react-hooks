import { useRef, memo } from 'react';

interface Data {
    title: string,
    url: string
}

type Props = {src: Data, onPlay: Function, onPause: Function};

export default memo(function VideoPlayer({ src, onPlay, onPause }: Props) {
    const videoRef = useRef<any>();
    const countRef = useRef<number>(0);
    countRef.current++;

    return (
        <div>
            <p>{countRef.current}</p>
            <p>{src.title}</p>
            <video src={src.url} ref={videoRef} />
            <button onClick={() => {
                videoRef.current.play();
                onPlay();
            }}>Play</button>
            <button onClick={() => {
                videoRef.current.pause();
                onPause();
            }}>Pause</button>
        </div>
    )
}, (prevProps, nextProps) => {
    if (prevProps.src.url !== nextProps.src.url) {
        return false
    }
    if (prevProps.src.title !== nextProps.src.title) {
        return false
    }
    return true;
});



