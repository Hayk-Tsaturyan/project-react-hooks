
import React, { useState, useLayoutEffect } from "react";

function UseLayoutEffect() {
    const [value, setValue] = useState<number>(0);

    useLayoutEffect(() => {
        if (value === 0) {
            setValue(Math.random() * 99 + 99);
        }
    }, [value]);

console.log('render', value);

 return (
    <div onClick={() => setValue(0)}>{value}</div>
 )
}

export default UseLayoutEffect;


















