import { UserList } from "../components/UserList/UserList"
import { UserProfile } from "../components/UserProfile/UserProfile"

import "./App.css"


function App() {

  return (
    <>
    <div className='appBase'>
      <UserList />
      <UserProfile />
    </div>
    </>
  )
}

export default App
