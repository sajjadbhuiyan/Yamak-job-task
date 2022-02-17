import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { DriverLish } from "./DriverLish";

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('drivers');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const Home = () => {
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

    // main array of objects state || Drivers state || Drivers array of objects
    const [drivers, setDrivers]=useState(getDatafromLS());

    // input field states
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [dob, setDob]=useState('');
    const [license, setLicense]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [expireDate, setExpireDate]=useState('');
  
    console.log(email)
    // form submit event
    const handleAddBookSubmit=(e)=>{
      e.preventDefault();
      // creating an object
      let driver={
        firstName,
        lastName,
        dob,
        license,
        email,
        phone,
        expireDate
      }
      setDrivers([...drivers,driver]);
      setFirstName('');
      setLastName('');
      setDob('');
      setLicense('');
      setEmail('');
      setPhone('');
      setExpireDate('');
    }
  
    // delete Driver from LS
    const deleteDriver=(isbn)=>{
      const filteredDrivers=drivers.filter((element,index)=>{
        return element.isbn !== isbn
      })
      setDrivers(filteredDrivers);
    }
  
    // saving data to local storage
    useEffect(()=>{
      localStorage.setItem('drivers',JSON.stringify(drivers));
    },[drivers])

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>

      <div className=''>
      <h1>Driver Add</h1>
      <p>Add and view your Driver using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label> First name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFirstName(e.target.value)} value={firstName}></input>
            <br></br>
            <label>Last Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLastName(e.target.value)} value={lastName}></input>
            <br></br>
            <label>DOB</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDob(e.target.value)} value={dob}></input>
            <br></br>
            <label>License No</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setLicense(e.target.value)} value={license}></input>
            <br></br>
            <label>Email</label>
            <input type="email" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label>Phone</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
            <br></br>
            <label>Expiration</label>
            <input type="date" className='form-control' required
            onChange={(e)=>setExpireDate(e.target.value)} value={expireDate}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {drivers.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>License</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Expiration</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <DriverLish drivers={drivers} deleteBook={deleteDriver}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setDrivers([])}>Remove All</button>
          </>}
          {drivers.length < 1 && <div>No Drivers are added yet</div>}
        </div>

      </div>
    </div>
      
    </>
  );
};

export default Home;
