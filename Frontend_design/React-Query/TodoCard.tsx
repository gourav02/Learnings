interface TodoCardProps {
    id: number
    title: string
    isCompleted: boolean
}

export const TodoCard = ({ id, title, isCompleted }: TodoCardProps) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <input
                type="checkbox"
                defaultChecked={isCompleted}
                id={String(id)}
            />
            <label htmlFor={String(id)}>{title}</label>
        </div>
    )
}
