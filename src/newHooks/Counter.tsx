import { type } from '@testing-library/user-event/dist/type';
import { forwardRef, useImperativeHandle, useState} from 'react';

export const Counter = forwardRef((props: any, ref: any) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    useImperativeHandle(ref, () => ({ increment }));

    return (
        <>
            <button onClick={increment}>+1</button>
            <h2>Counter: {count}</h2>
        </>
    )
});





