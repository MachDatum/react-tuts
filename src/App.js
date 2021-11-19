import { useEffect, useState } from "react";
import {DefaultButton, PrimaryButton, TextField,Text} from "@fluentui/react";
import "./App.css";

const defaultUsers = [
  {name: "Hemanand", gender: "Male", id:1},
  {name: "Nish", gender: "Male", id:2},
  {name: "Jagadesh", gender: "Male", id:3},
  {name: "Nandhana", gender: "Female", id:4},
  {name: "Sobiya", gender: "Female", id:5},
]

export default function App(){
  const [users, setUsers] = useState(defaultUsers);

  useEffect(() => {
    console.log("Welcome to the application");
  }, []);

  useEffect(() => {
    console.log("Users were modified")
  }, [users])

  return(
    <div className="container">
      {
        users.map((user) => 
        <Hello 
          key={user.id} 
          id={user.id}
          name={user.name} 
          gender={user.gender} 
          onDelete={handleDelete}
          onAction={takeAction} />)
      }
    </div>
  )

  function takeAction(name){
    console.log("Action Taken for " + name);
  }

  function handleDelete(id){
    setUsers(users.filter(user => user.id !== id));
  }
}

function Hello(props){
  const [value, setValue] = useState(props.name);

  const isNameShorterThan6 = value.length < 6;

  return(
    <div className={"user"}>
      <Text>Hello </Text>
      <TextField 
        value={value} 
        onChange={(event) => setValue(event.target.value)}>
      </TextField>
      <PrimaryButton  disabled={isNameShorterThan6} onClick={handleAction}>Confirm</PrimaryButton>
      <DefaultButton onClick={() => props.onDelete(props.id)}>Delete</DefaultButton>
    </div>
  )

  function handleAction(){
    props.onAction(value);
  }
}