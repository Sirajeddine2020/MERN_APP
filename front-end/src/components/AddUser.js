import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../JS/actions/actionUser";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const isEdit = useSelector((state) => state.isEdit);

  useEffect(() => {
    if (isEdit) {
      setNewUser(userId);
    } else {
      setNewUser({ name: "", email: "", phone: "" });
    }
  }, [userId, isEdit]);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {isEdit ? "Edit Contact" : "Add New Contact"}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>name :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={newUser.name}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>email :</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={newUser.email}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>phone :</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter your phone"
                  onChange={handleChange}
                  value={newUser.phone}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/User_list">
            <Button
              variant="outline-primary edit-button"
              onClick={() => {
                isEdit
                  ? dispatch(editUser(newUser._id, newUser))
                  : dispatch(addUser(newUser));
              }}
            >
              {isEdit ? "Save" : "Add"}
            </Button>
          </Link>
          <Link to="/User_list">
            <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AddUser;
