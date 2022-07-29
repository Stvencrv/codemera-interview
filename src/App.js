import { useReducer } from "react";
import TodosDispatch from "./providers/todoProvider";
import TodosWrapper from "./wrappers/todoWrapper";
import todosReducer, { initialState } from "./reducers/todosReducer";

import "antd/dist/antd.css";
import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  console.log(state);

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