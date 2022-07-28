let input = document.querySelector(".inputBox input");
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".todoList");
console.log(todoForm);
todoForm.addEventListener("submit", function (e) {
  //이벤트의 기본 동작을 막는다.

  e.preventDefault();
  //input 값이 빈 문자열이면 함수 종료
  if (input.value === "") return;

  let todoText = input.value;

  // .todoList 글씨 추가해보기!
  let todoItem = document.createElement("li");
  // todoItem.innerText = todoText;

  // let icon = document.createElement("i");
  // icon.className = "xi-trash";

  // let iconBox = document.createElement("div");
  // iconBox.className = "btnDel";
  // iconBox.appendChild(icon);

  // todoItem.appendChild(iconBox);

  // todoList.appendChild(todoItem);

  //innerHTML로 대체해보기
  todoItem.innerHTML = `${todoText} <div class="btnDel">
  <i class="xi-trash"></i> </div>`;
  todoList.appendChild(todoItem);
  input.value = "";
});

// li클릭시 회색 및 취소선 처리
let todoItems = todoList.querySelectorAll("li");

// todoItems.forEach((todo) => {
//   todo.addEventListener("click", function () {
//     todo.classList.toggle("done");
//   });
// });

//등록할때마다 배열에 먼저 추가 후 =>배열을 기반으로 화면 출력(함수)
let todoArr = [
  {
    id: 1,
    text: "dfdff",
    done: true,
  },
  {
    id: 2,
    text: "투두리스트 만들기",
    done: true,
  },
];

function remove(id) {
  todoArr = todoArr.filter(function (todo) {
    return todo.id !== 1;
  });
  render();
}
remove(2);

// todoArr = todoArr.filter(function (todo) {
//   return todo.id !== 1;
// });
// console.log(todoArr);
//id가 2인것만 골라내는 고차함수
//=> todoArr.filter()

function render() {
  todoList.innerHTML = "";
  todoArr.forEach((todo) => {
    //단축평가 => todo.done 값이 true일때만 class="done"적용
    todoList.innerHTML += `<li class="${todo.done && "done"}">${
      todo.text
    }</li>`;
  });
}

//이벤트위임
todoList.addEventListener("click", function (e) {
  if (e.target.matches(".todoList li")) e.target.classList.toggle("done");
  else if (e.target.matches(".btnDel .xi-trash")) {
    //현재요소의 부모요소
    let parentLi = e.target.parentNode.parentNode;
    //자기 자신을 지운다
    parentLi.remove();
  }
});

localStorage.setItem("todo", "테스트");
