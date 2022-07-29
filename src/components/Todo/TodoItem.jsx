import { useContext } from "react";
import { List, Checkbox } from "antd";
import { toggleTodo, remove } from "../../actions/todos";
import TodosDispatch from "../../providers/todoProvider.js";
import DeleteIcon from './DeleteIcon';

export const TodoItem = (props) => {

  const dispatch = useContext(TodosDispatch);
  const {
    id,
    todo: { title, isDone }
  } = props;

  const handleStatus = () => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(remove(id));
  };

  return (
    <List.Item
      data-item={id}
      className={isDone ? "done" : null}
      actions={[
        <DeleteIcon onClick={handleRemove} />
      ]}
    >
      <List.Item.Meta
        title={title}
        avatar={<Checkbox onChange={handleStatus} />}
      />
    </List.Item>
  );
}

export default TodoItem;