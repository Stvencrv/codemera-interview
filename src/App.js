import { useReducer } from "react";
import TodosDispatch from "./providers/todoDispatch";
import TodosWrapper from "./wrappers/todoWrapper";
import todosReducer, { initialState } from "./reducers/todoReducer";
import './styles/index.css';

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div className="App">
      <h1>Todo App With UseReducer</h1>
      <TodosDispatch.Provider value={dispatch}>
        <TodosWrapper todos={state.todos} currentView={state.currentView} />
      </TodosDispatch.Provider>
    </div>
  );
}

export default App;