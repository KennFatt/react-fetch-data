import React, { useState } from "react";
import SearchTask from "./components/SearchTask";
import TaskContainer from "./components/TaskContainer";
import ErrorBoundary from "./ErrorBoundary";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <main className="container mx-auto px-6 md:px-32 lg:px-64">
        <ErrorBoundary>
          <div className="flex justify-center items-center py-5">
            <SearchTask
              handler={onSearchChange}
              placeholder="Search"
              value={searchValue}
            />
          </div>

          <TaskContainer searchValue={searchValue} />
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;
