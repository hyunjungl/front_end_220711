const initialState = [
  { id: 1, body: "투두리스트 스타일링", done: true },
  { id: 2, body: "리덕스 공부하기", done: false },
];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, body: action.body, done: false });
    default:
      return state;
  }
}
