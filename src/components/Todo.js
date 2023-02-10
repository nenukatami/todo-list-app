import PropTypes from "prop-types";
import "./Todo.css";

const Todo = ({ name, desc, user }) => {
  return (
    <div className="todo-grid">
      <div>{user}</div>
      <div>{name}</div>
      <div>{desc}</div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Todo;
