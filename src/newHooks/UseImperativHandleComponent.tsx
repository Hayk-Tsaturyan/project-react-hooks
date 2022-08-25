import { useRef } from 'react';
import { Counter } from './Counter';

function UseImperativeHandle() {
    const ref = useRef<any>();

    return (
        <>
            <Counter ref={ref} />
            <button onClick={() => ref.current.increment()}>
                Outside Button
            </button>
        </>
    )
}

export default UseImperativeHandle;








