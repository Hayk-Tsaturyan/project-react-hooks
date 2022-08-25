import TodoItem from './TodoItem';

type Props = {todos: [], onChange: Function, onDelete: Function}

export default function TodoList({todos, onChange, onDelete}: Props) {

    return (
        <div>
            {
                todos.map((todo: any) => {
                    return <TodoItem 
                    todo={todo}
                    key={todo.id}
                    onChange={onChange}
                    onDelete={onDelete}
                    />
                })
            }
        </div>
    )
}




