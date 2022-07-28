//등록할때마다 배열에 먼저 추가 후 =>배열을 기반으로 화면 출력(함수)
let todoArr = [
  {
    text: "dfdff",
    done: true,
  },
  {
    text: "투두리스틑 만들기",
    done: true,
  },
  ,
];

function render() {
  todoArr.forEach((todo) => {
    //단축평가 => todo.done 값이 true일때만 class="done"적용
    todoList.innerHTML += `<li class="${todo.done && "done"}">${
      todo.text
    }</li>`;
  });
}
