import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import LoadingIndicator from "./LoadingIndicator";

interface TaskDetail {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// TODO: it should be configurable or somehow injectable with NODE_ENV.
const apiUrl = "https://jsonplaceholder.typicode.com/users/1/todos";

interface Props {
  searchValue: string;
}

const TaskContainer: React.FC<Props> = ({ searchValue }) => {
  const [tasks, setTasks] = useState<TaskDetail[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [_, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await axios(`${apiUrl}`);

        setTasks(res.data);
        setIsLoading(false);
      } catch {
        /**
         * React's error boundary does not catch an error for async code,
         * we throwing an error inside state's dispatcher and react will count it
         * as an error.
         */
        setError(() => {
          throw new Error("Couldn't fetch the data from API server!");
        });
      }
    };

    fetchData();
  }, []);

  const onTaskRemoved = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <ul className="space-y-4 py-2">
      {tasks
        .filter(({ title }) => title.includes(searchValue))
        .map(({ ...rest }) => (
          <Task key={rest.id} onRemove={onTaskRemoved} {...rest} />
        ))}
    </ul>
  );
};

export default TaskContainer;
