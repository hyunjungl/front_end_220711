
function countFriend(list) {
  console.log("친한 친구 세는 중");
  return list.filter((user) => user.isFriend).length;
}




export default App;