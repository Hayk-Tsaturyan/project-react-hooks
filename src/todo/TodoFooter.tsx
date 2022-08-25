
type Props = {todos: any, cleareCompleted: any}

export default function TodoFooter({todos, cleareCompleted}: Props) {
    const completedLength = todos.filter((todo: any) => todo.isCompleted).length;
    return (
        <div>
            {completedLength} / {todos.length} completed
            <button onClick={cleareCompleted}>Cleare Completed</button>
        </div>
    )
}
