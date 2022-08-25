import { useState } from 'react';

type Props = {onAdd: Function}

export default function TodoForm({onAdd}: Props) {
    const [text, setText] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}