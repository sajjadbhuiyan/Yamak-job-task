import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="table-info">
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.bod}</td>
      <td>{contact.license}</td>
      <td>{contact.expiration}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button className="btn btn-success"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
