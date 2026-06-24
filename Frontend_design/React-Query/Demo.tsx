import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData, addTodo } from "./mockAPI";
import { TodoCard } from "./TodoCard";
import { useState } from "react";
export const Demo = () => {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const queryCLient = useQueryClient();
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", { search }],
    queryFn: () => fetchData(search),
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) return <div>loading....</div>;

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          add todo
        </button>
      </div>
      <br />
      <br />
      <br />
      <h2>TODO list</h2>
      <div>
        {todos?.map((todo) => {
          return (
            <TodoCard
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          );
        })}
      </div>
    </>
  );
};
