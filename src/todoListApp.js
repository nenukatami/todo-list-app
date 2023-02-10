import { useState } from "react";
import DeveloperFilter from "./components/DeveloperFilter";
import Todos from "./components/Todos";

const TodoListApp = () => {
  const [developer, setDeveloper] = useState("");

  return (
    <>
      <header>Todo List</header>

      <DeveloperFilter setFilter={setDeveloper} />

      <div>
        <Todos key={developer} developer={developer}/>
      </div>
    </>
  );
};

export default TodoListApp;
