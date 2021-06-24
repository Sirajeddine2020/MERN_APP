import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./components/AddUser";
import UserCard from "./components/UserCard";
import { getContacts, toggleFalse } from "./JS/actions/actionUser";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const getAllUsers = () => {
    dispatch(getContacts());
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Link to="/User_list">
          <Button variant="outline-primary button">Contact List</Button>
        </Link>
        <Link to="/Add_user">
          <Button variant="primary button" onClick={()=>dispatch(toggleFalse())}>Add Contact</Button>
        </Link>

        <Switch>
          <Route path="/(Add_user|Edit_user)/" render={() => <AddUser />} />
          <Route
            path="/User_list"
            render={() => (
              <div className="contact-list">
                {
                users.map((el, i) => (
                <UserCard user={el} key={i} />
                ))}
              </div>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
