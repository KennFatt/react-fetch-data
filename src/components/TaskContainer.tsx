import React from "react";
import { useDataApi } from "../utils";
import Task from "./Task";
import LoadingIndicator from "./LoadingIndicator";

interface TaskDetail {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  searchValue: string;
}

const TaskContainer: React.FC<Props> = ({ searchValue }) => {
  const [{ data, isLoading }, setData] = useDataApi(
    "https://jsonplaceholder.typicode.com/users/1/todos",
    [] as TaskDetail[]
  );

  const onTaskRemoved = (taskId: number) => {
    setData((prevData) => prevData.filter((task) => task.id !== taskId));
  };

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <ul className="space-y-4 py-2">
      {data
        .filter(({ title }) => title.includes(searchValue))
        .map(({ ...rest }) => (
          <Task key={rest.id} onRemove={onTaskRemoved} {...rest} />
        ))}
    </ul>
  );
};

export default TaskContainer;
