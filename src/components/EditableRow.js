import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td >
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="First Name"
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="Last Name"
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="BOD"
          name="bod"
          value={editFormData.bod}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "100px" }}
          type="text"
          required="required"
          placeholder="License"
          name="license"
          value={editFormData.license}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "120px" }}
          type="date"
          required="required"
          placeholder="Expiration"
          name="expiration"
          value={editFormData.expiration}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "120px" }}
          type="text"
          required="required"
          placeholder="phone number"
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          style={{ width: "250px" }}
          type="email"
          required="required"
          placeholder="Email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="btn btn-success" type="submit">Save</button>
        <button className="btn btn-danger" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
