
type Props = {todo: any, onChange: Function, onDelete: Function}

export default function TodoItem({todo, onChange, onDelete}: Props) {
  return (
    <div>
        <input  
            style={{height: '20px', width: '20px'}}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => {
                onChange({
                    ...todo,
                    isCompleted: e.target.checked
                })
            }}
        />
        {todo.text}
        <button onClick={() => {
            onDelete(todo)
        }}>X</button>
    </div>
  )
}
