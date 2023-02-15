import './App.css';
import {useState, useEffect} from 'react';
import {db} from './firebase_auth';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore"
function Database() {
 const [newName, setNewName] = useState('');
 const [newAge, setNewAge] = useState(0);
 const [users, setUsers] = useState([]);
 const usersCollection = collection(db, 'users');

  const createUser = async () => {
    if(String(users.find(user => String(user.name) === String(newName))) !== "undefined" || newName === '' || newAge === '') {
      return alert('Incorrect or repeated input');
    }
    else{
      await addDoc(usersCollection, {name: newName, age: Number(newAge)});
    }
  };

  const updateAge = async (id, age) =>{
    const userRef = doc(db, "users", id);
    const newAge = {age: age+1};
    await updateDoc(userRef, newAge);
  }
  const deleteUser = async (id) => {
    const userRef = doc(db, "users", id);
    await deleteDoc(userRef);

  }
 useEffect(() => {
  const getUsers = async ()=> {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
  getUsers();
 });

 let output =  users.map((user) =>{

  return(
    <div>
      
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={()=>updateAge(user.id, user.age)}>Increase age</button>
      <button style={{marginLeft:"3rem" }}onClick={()=>deleteUser(user.id)}>Delete</button>
    </div>
  );
});
  return (
    <div className="App">
      <input placeholder='Name: ' onChange={(e) => {setNewName(e.target.value)}}></input>
      <input type="number" placeholder='Age: ' onChange={(e) => {setNewAge(e.target.value)}}></input>
      <button onClick={createUser}>Submit</button>
        <div>
          {output}
        </div>
    </div>
  );
}

export default Database;