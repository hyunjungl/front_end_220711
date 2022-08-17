import { atom, RecoilRoot } from "recoil";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoBlock from "./components/TodoBlock";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <RecoilRoot>
      <Todos />
    </RecoilRoot>
  );
}

export default App;
