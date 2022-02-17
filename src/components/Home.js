import React, { useState, Fragment, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";


const Home = () => {

  // ======Authenticatio======
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // =====Authentication End=======


  // =======Driver add and List=======

  const getDatafromLS=()=>{
    const data = localStorage.getItem('drivers');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }

  const [contacts, setContacts] = useState(getDatafromLS());
  console.log(contacts)
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    bod: "",
    license: '',
    expiration:'',
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    bod: "",
    license:'',
    expiration:'',
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: new Date().getTime().toString(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      bod: addFormData.bod,
      license:addFormData.license,
      expiration:addFormData.expiration,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      bod: editFormData.bod,
      license:editFormData.license,
      expiration:editFormData.expiration,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      bod: contact.bod,
      license:contact.license,
      expiration:contact.expiration,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  useEffect(()=>{
    localStorage.setItem('drivers',JSON.stringify(contacts));
  },[contacts])


   

  return (
    <>
      <div className="p-4 box text-center">
        Hello Welcome to YAMAK <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <br></br>

      {/* ======Form part start====== */}

      <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>License No</th>
              <th>Expiration Date</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>

      <center>
        <h1>Add a Driver Info</h1>
        <div style={{width:"700px"}}>
     
          <Form onSubmit={handleAddFormSubmit}>
            <Form.Control
              type="text"
              name="firstName"
              required="required"
              placeholder="First Name"
              onChange={handleAddFormChange}
            />

            <br></br>
            <Form.Control
              type="text"
              name="lastName"
              required="required"
              placeholder="Last Name"
              onChange={handleAddFormChange}
            />
            <br></br>

            <Form.Control
              type="text"
              name="bod"
              required="required"
              placeholder="BOD"
              onChange={handleAddFormChange}
            />
            <br></br>

            <Form.Control
              type="text"
              name="license"
              required="required"
              placeholder="License"
              onChange={handleAddFormChange}
            />
            <br></br>

            <Form.Control
              type="date"
              name="expiration"
              required="required"
              placeholder="Expiration Date"
              onChange={handleAddFormChange}
            />
            <br></br>

            <Form.Control
              type="text"
              name="phoneNumber"
              required="required"
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
            />
            <br></br>

            <Form.Control
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
            />
            <br></br>
            <button style={{width:"700px"}} className="btn btn-success" type="submit">Add</button>
          </Form>
        </div>
      </center>
     
    </div>
     
    </>
  );
};

export default Home;
