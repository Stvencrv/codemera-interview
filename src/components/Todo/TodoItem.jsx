import { useContext } from "react";
import { List, Checkbox, Button } from "antd";
import { toggleTodo, remove } from "../../actions/todoActions";
import TodosDispatch from "../../providers/todoDispatch";

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
        <Button color="danger" onClick={ handleRemove } >
          remove
        </Button>
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