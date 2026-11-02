// style
import "./App.css";
import { useState } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NewUSerForm from "./components/newuser/NewUserForm";
import UserList from "./components/userList/UserList";


function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([]);

  // delete user
  const deleteUser = (id) => {

    setUsers((prev) => prev.filter((user) => user.id !== id));
  };


  //  close modal

  const closeModal =(e)=>{
    if (e.target.className=== "overlay") setShowModal(false)
    if (e.key === 'Escape') setShowModal(false)
  
  }
 
//  edd user
const addUser = (user)=>{
  setUsers((prev)=>{
    return  [...prev, user]
  })
  setShowModal(false)
}






  return (
    <div onClick={closeModal} onKeyDown={closeModal}  className="App">
      <Navbar usersLength={users.length} />
      <main>
        {users.length === 0 && (
          <div className="no-users">
            <h2>No User</h2>
          </div>
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
       {showModal &&  <NewUSerForm addUser={addUser}/> }
         <button onClick={()=> setShowModal(true)} className="create-user">Create User</button>
      <Footer />
    </div>
  );
}

export default App;

