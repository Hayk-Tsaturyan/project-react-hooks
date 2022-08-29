
type Props = {todos: any, clearCompleted: any}

export default function TodoFooter({todos, clearCompleted}: Props) {
    const completedLength = todos.filter((todo: any) => todo.isCompleted).length;
    return (
        <div>
            {completedLength} / {todos.length} completed
            <button onClick={clearCompleted}>Cleare Completed</button>
        </div>
    )
}
