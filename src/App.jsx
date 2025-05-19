import { ProfileForm } from "./components/ProfileForm/ProfileForm";
import { UserApi } from "./components/UserApi/UserApi";
import { UserList } from "./components/UserList/UserList";
import { UserProfile } from "./components/UserProfile/UserProfile";

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
