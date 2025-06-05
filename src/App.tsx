import { ProfileForm } from "./components/ProfileForm/ProfileForm";
import { UserList } from "./components/UserList/UserList";

import "./App.css";

function App() {
  return (
    <>
      <div className="appBase">
        <UserList />
        <ProfileForm />
      </div>
    </>
  );
}

export default App;
