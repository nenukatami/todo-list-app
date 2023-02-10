import Todo from "./Todo";
import PropTypes from 'prop-types';
import { useFetchDeveloper } from "../hooks/useFetchDeveloper";

const Todos = ({developer}) => {
  
  const {data:todosList} = useFetchDeveloper(developer);

  return (
    <>
      <div className="todos-container">
        {
          todosList.map(todo => (
            < Todo key={todo.id} {...todo}/>
          ))
        }
      </div>
    </>
  );
}

Todos.propTypes = {
  developer: PropTypes.string.isRequired
}

export default Todos;