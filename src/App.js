import { useReducer } from "react";
import TodosDispatch from "./providers/todoDispatch";
import TodosWrapper from "./wrappers/todoWrapper";
import todosReducer, { initialState } from "./reducers/todoReducer";
import { Layout } from 'antd';
import './styles/App.css';

const { Content } = Layout;

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div className="App">
      <Content syle={{ marging: 10. }}>
       <h1>Todo App With UseReducer</h1>
        <TodosDispatch.Provider value={dispatch}>
          <TodosWrapper todos={state.todos} currentView={state.currentView} />
        </TodosDispatch.Provider> 
      </Content>
    </div>
  );
}

export default App;