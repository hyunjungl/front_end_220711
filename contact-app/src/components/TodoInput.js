import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../App";

export default function TodoInput() {
  const [todoList, setTodoList] = useRecoilState(todoState);
  const [input, setInput] = useState("");

  const nextId = useRef(1);
  const onCreate = () => {
    setTodoList([
      ...todoList,
      { id: nextId.current, text: input, done: false },
    ]);
    nextId.current++;
  };

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
