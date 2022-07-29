import { useContext } from 'react';
import { List, Tabs } from 'antd';
import TodoItem from "./../components/Todo/TodoItem";
import TodoForm from "./../components/Todo/TodoForm";
import TodosDispatch from "../providers/todoDispatch";
import { changeView } from "../actions/todoActions";

const TabPane = Tabs.TabPane;

export default function TodosWrapper(props) {
  const dispatch = useContext(TodosDispatch);
  const { todos, currentView } = props;

  const handleTabChange = (value) => {
    dispatch(changeView(value));
  };

  const filterTodos = (type) => {
    switch (type) {
      case "done":
        return todos.filter((todo) => todo.isDone);
      case "pending":
        return todos.filter((todo) => !todo.isDone);
      default:
        return todos;
    }
  };

  return (
      <>
        <TodoForm />
        <Tabs style={{maxWidth: "50%"}} defaultActiveKey="all" onChange={ handleTabChange }>
            <TabPane tab={`All (${filterTodos("all").length})`} key="all" />
            <TabPane tab={`Done (${filterTodos("done").length})`} key="done" />
            <TabPane
            tab={`Pending (${filterTodos("pending").length})`}
            key="pending"
            />
        </Tabs>
        <List
            className="ul-todos"
            itemLayout="horizontal"
            bordered={true}
            dataSource={filterTodos(currentView)}
           style={{maxWidth: "50%"}}    
          renderItem={ (todo, index) => (
              
            <TodoItem todo={todo} id={index} key={`todo_${index}`} />
            )}
            locale={{ emptyText: "No to-dos found." }}
        />
    </>
  );
}
