import { useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState();

  return (
    <>
      <CreateUser />
      <UserList />
    </>
  );
}

export default App;
