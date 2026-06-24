interface Todo {
    id: number,
    title: string,
    isCompleted : boolean
}

const todos: Todo[] = [
    { id: 1, title: 'eat mango', isCompleted: false },
    { id: 2, title: 'drink water', isCompleted: true },
    { id: 3, title: 'go for a walk', isCompleted: false },
    { id: 4, title: 'read a book', isCompleted: true },
    { id: 5, title: 'write code', isCompleted: false },
    { id: 6, title: 'watch a movie', isCompleted: true },
    { id: 7, title: 'cook dinner', isCompleted: false },
    { id: 8, title: 'call a friend', isCompleted: true },
    { id: 9, title: 'do laundry', isCompleted: false },
    { id: 10, title: 'clean the house', isCompleted: true },
    { id: 11, title: 'buy groceries', isCompleted: false },
    { id: 12, title: 'pay bills', isCompleted: true },
    { id: 13, title: 'exercise', isCompleted: false },
    { id: 14, title: 'meditate', isCompleted: true },
    { id: 15, title: 'learn TypeScript', isCompleted: false },
    { id: 16, title: 'review pull requests', isCompleted: true },
    { id: 17, title: 'update resume', isCompleted: false },
    { id: 18, title: 'plan weekly goals', isCompleted: true },
    { id: 19, title: 'water the plants', isCompleted: false },
    { id: 20, title: 'take a nap', isCompleted: true },
]

export const  fetchData = async (query = '') : Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const filterTodos = todos.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()));
    return [...filterTodos];
}

export const addTodo = async (todo: Pick<Todo,'title'>) : Promise<Todo> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newTodo = {
        id: todos.length + 1,
        title: todo.title,
        isCompleted: false,
    }
    todos.push(newTodo);
    return newTodo;
}