import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"


export default function App() {
  return (

    <UserContextProvider>

      <h1>Learning use context </h1>

    <Login/>
    <Profile/>


    </UserContextProvider>

   
  )
}